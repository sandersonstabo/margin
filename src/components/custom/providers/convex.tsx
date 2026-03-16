import { useBarekey } from "@barekey/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import type { ReactNode } from "react";

export type ConvexProps = {
    children?: ReactNode;
};

const convex_clients = new Map<string, ConvexReactClient>();

const get_convex_client = (url: string) => {
    const existing = convex_clients.get(url);
    if (existing) {
        return existing;
    }

    const client = new ConvexReactClient(url);
    convex_clients.set(url, client);
    return client;
};

export const Convex = ({ children }: ConvexProps) => {
    const env = useBarekey();

    return <>
        <ConvexProvider client={get_convex_client(env.get("CONVEX_URL"))}>
            {children}
        </ConvexProvider>
    </>
};
