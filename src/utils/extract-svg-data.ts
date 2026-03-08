import type { SVGProps } from "react";

import { expect } from "@/utils/expect";

export type ExtractSvgDataProps = {
    svg: string;
};

export type ExtractSvgDataResult = Partial<SVGProps<SVGSVGElement>> & {
    dangerouslySetInnerHTML: {
        __html: string;
    };
};

const normalize_svg_attribute_name = (name: string) => {
    if (name === "class") {
        return "className";
    }

    return name.replace(/[:\-]([a-z])/g, (_, character: string) =>
        character.toUpperCase(),
    );
};

/**
 * Will obliterate you if you pass empty data.
 */
export const extract_svg_data = ({
    svg,
}: ExtractSvgDataProps): ExtractSvgDataResult => {
    const parser = new DOMParser();
    const document = parser.parseFromString(svg, "image/svg+xml");
    const root = document.documentElement;

    if (root.tagName.toLowerCase() !== "svg") {
        throw new Error("Could not extract SVG data.");
    }

    const inner_html = expect(root.innerHTML, "Could not extract SVG contents.");

    const svg_props = Array.from(root.attributes).reduce<Record<string, string>>(
        (accumulator, attribute) => {
            if (attribute.name === "width" || attribute.name === "height") {
                return accumulator;
            }

            const normalized_name = normalize_svg_attribute_name(attribute.name);

            accumulator[normalized_name] = attribute.value;

            return accumulator;
        },
        {},
    );

    return {
        ...(svg_props as Partial<SVGProps<SVGSVGElement>>),
        dangerouslySetInnerHTML: {
            __html: inner_html,
        },
    };
};
