import { create_provider } from "@/utils/create-provider";
import { expect } from "@/utils/expect";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex_url = expect(
    import.meta.env.VITE_CONVEX_URL as string,
);

const convex_client = new ConvexReactClient(convex_url);
const Convex = create_provider(ConvexProvider, {
    client: convex_client,
});

export const convex = () => {
    return {
        Convex,
    };
};
