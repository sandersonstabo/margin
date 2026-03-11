import { createElement, type ComponentType, type ReactNode } from "react";

export type CreateElementTreeProps = {
    components: ComponentType<{ children?: ReactNode }>[];
};

export const create_element_tree = (
    { components }:
    CreateElementTreeProps
) => ({ children }: { children?: ReactNode }) => components.reduceRight(
    (child, Parent) => createElement(Parent, undefined, child),
    children,
);
