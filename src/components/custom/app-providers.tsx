import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode, type ReactNode } from "react";
import { ThemeWatcher } from "theme-watcher";

import { expect } from "@/utils/expect";

export type AppProviderProps = {
    children: ReactNode;
};

export const AppProviders = ({ children }: AppProviderProps) => {
    const clerk_publishable_key = expect(
        import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string,
    );

    return (
        <StrictMode>
            <ClerkProvider publishableKey={clerk_publishable_key}>
                <ThemeWatcher />
                {children}
            </ClerkProvider>
        </StrictMode>
    );
};
