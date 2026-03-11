import { create_provider } from "@/utils/create-provider";
import { expect } from "@/utils/expect";
import { ClerkProvider } from "@clerk/react-router";
 
const clerk_publishable_key = expect(
    import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string,
);

const Clerk = create_provider(ClerkProvider, {
    publishableKey: clerk_publishable_key,
});

export const clerk = () => {
    return {
        Clerk,
    };
};
