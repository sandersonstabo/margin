import { StrictMode, type ReactNode } from "react";
import { ThemeWatcher } from "theme-watcher";
import { Clerk } from "@/components/custom/providers/clerk";
import { create_element_tree } from "@/utils/create-element-tree";
import { Convex } from "@/components/custom/providers/convex";
import { PostHog, PostHogBoundary } from "@/components/custom/providers/posthog";
import { BrowserRouter } from "react-router-dom";
import { Barekey } from "@/components/custom/providers/barekey";

export type AppProviderProps = {
    children: ReactNode;
};

export const AppProviders = ({ children }: AppProviderProps) => {
    const Providers = create_element_tree({ components: [
        BrowserRouter,
        Barekey,
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
