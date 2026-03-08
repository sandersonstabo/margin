import { expect } from "@/utils/expect";

const OKLCH_PATTERN = /oklch\([^)]+\)/i;
const CSS_VARIABLE_PATTERN = /^--[a-z0-9-]+$/i;

const extract_oklch = (value: string) => {
    const match = value.match(OKLCH_PATTERN);

    return expect(match?.[0], "Expected CSS variable to resolve to an oklch() color.");
};

export const extract_oklch_from_tw = (value: string) => {
    expect(
        CSS_VARIABLE_PATTERN.test(value),
        `Expected a CSS variable like --muted-foreground, received "${value}".`,
    );

    expect(
        typeof window !== "undefined",
        "extract_oklch_from_tw can only run in the browser.",
    );

    const styles = getComputedStyle(document.documentElement);
    const resolved_value = expect(
        styles.getPropertyValue(value).trim(),
        `CSS variable "${value}" is not defined.`,
    );

    if (resolved_value.startsWith("var(")) {
        const nested_variable = expect(
            resolved_value.match(/var\((--[^),\s]+)/)?.[1],
            `CSS variable "${value}" points to an invalid nested variable.`,
        );

        const nested_value = expect(
            styles.getPropertyValue(nested_variable).trim(),
            `Nested CSS variable "${nested_variable}" is not defined.`,
        );

        return extract_oklch(nested_value);
    }

    return extract_oklch(resolved_value);
};
