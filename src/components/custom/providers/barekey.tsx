import { PublicBarekeyClient } from "@barekey/sdk/public";
import { BarekeyProvider } from "@barekey/react";
import type { ReactNode } from "react";
import barekey_config from "$/barekey.json" with { type: "json" };

export type BarekeyProps = {
    children?: ReactNode;
};

const barekey_client = new PublicBarekeyClient({
    json: barekey_config,
});

export const Barekey = ({ children }: BarekeyProps) => (
    <BarekeyProvider client={barekey_client} fallback={null}>
        {children}
    </BarekeyProvider>
);
