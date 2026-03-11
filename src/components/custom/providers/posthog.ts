import { create_provider } from "@/utils/create-provider";
import { expect } from "@/utils/expect";
import { PostHogErrorBoundary, PostHogProvider } from "@posthog/react";
import { posthog as posthog_client } from "posthog-js";
import { createElement, type ReactNode } from "react";

export type PostHogBoundaryProps = {
    children?: ReactNode;
};

const posthog_token = expect(
    import.meta.env.VITE_PUBLIC_POSTHOG_TOKEN as string,
);

const posthog_host = expect(
    import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string,
);

posthog_client.init(posthog_token, {
    api_host: posthog_host,
});

const PostHogBoundary = ({ children }: PostHogBoundaryProps) =>
    createElement(PostHogErrorBoundary, undefined, children);

const PostHog = create_provider(PostHogProvider, {
    client: posthog_client,
});

export const posthog = () => {
    return {
        PostHogBoundary,
        PostHog,
    };
};
