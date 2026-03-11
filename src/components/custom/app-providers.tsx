import { StrictMode, type ReactNode } from "react";
import { ThemeWatcher } from "theme-watcher";
import { clerk } from "@/components/custom/providers/clerk";
import { create_element_tree } from "@/utils/create-element-tree";
import { convex } from "@/components/custom/providers/convex";
import { posthog } from "@/components/custom/providers/posthog";
import { BrowserRouter } from "react-router-dom";

export type AppProviderProps = {
    children: ReactNode;
};

export const AppProviders = ({ children }: AppProviderProps) => {
    const { Clerk } = clerk();
    const { Convex } = convex();
    const { PostHog, PostHogBoundary } = posthog();

    const Providers = create_element_tree({ components: [
        BrowserRouter,
        Clerk,
        Convex,
        PostHog,
        PostHogBoundary,
        StrictMode,
    ]});

    return <>
        <Providers>
            <ThemeWatcher />
            {children}
        </Providers>
    </>
};
