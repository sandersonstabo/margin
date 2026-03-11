import {
    createElement,
    type ComponentType,
    type FC,
    type ReactNode,
} from "react";

export const create_provider = <A extends { children?: ReactNode }>(
    component: ComponentType<A>,
    props?: Omit<A, "children">,
) : FC<{ children?: ReactNode }> => {
    const Provider: FC<{ children?: ReactNode }> = ({ children }) =>
        createElement(component, { ...props, children } as A);

    return Provider;
};
