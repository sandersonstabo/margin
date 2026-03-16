import { useBarekey } from "@barekey/react";
import { ClerkProvider } from "@clerk/react-router";
import type { ReactNode } from "react";

export type ClerkProps = {
    children?: ReactNode;
};

export const Clerk = ({ children }: ClerkProps) => {
    const env = useBarekey();

    return <>
        <ClerkProvider publishableKey={env.get("CLERK_PUBLISHABLE_KEY")}>
            {children}
        </ClerkProvider>
    </>
};
