import { useBarekey } from "@barekey/react";
import { PostHogErrorBoundary, PostHogProvider } from "@posthog/react";
import { posthog as posthog_client } from "posthog-js";
import type { ReactNode } from "react";
import { useEffect } from "react";

export type PostHogBoundaryProps = {
    children?: ReactNode;
};

export type PostHogProps = {
    children?: ReactNode;
};

export const PostHogBoundary = ({ children }: PostHogBoundaryProps) => (
    <PostHogErrorBoundary>
        {children}
    </PostHogErrorBoundary>
);

export const PostHog = ({ children }: PostHogProps) => {
    const env = useBarekey();
    const posthog_token = env.get("PUBLIC_POSTHOG_TOKEN");
    const posthog_host = env.get("PUBLIC_POSTHOG_HOST");

    useEffect(() => {
        posthog_client.init(posthog_token, {
            api_host: posthog_host,
        });
    }, [posthog_host, posthog_token]);

    return <>
        <PostHogProvider client={posthog_client}>
            {children}
        </PostHogProvider>
    </>
};
