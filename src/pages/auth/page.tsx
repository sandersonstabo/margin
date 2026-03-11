import { Logo } from "@/components/custom/logo";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple } from "@/components/custom/icons/apple";
import { Google } from "@/components/custom/icons/google";
import { extract_oklch_from_tw } from "@/utils/extract-oklch-from-tw";
import { useSignIn } from "@clerk/react-router";
import { toast } from "sonner";

export const Page = () => {
    const { signIn, fetchStatus } = useSignIn();

    type SSOProps = {
        strategy: "oauth_apple" | "oauth_google";
    }

    const sso = async (
        { strategy }:
        SSOProps
    ) => {
        const { error } = await signIn.sso({
            strategy,
            redirectUrl: "/",
            redirectCallbackUrl: "/auth/callback"
        });

        if (error) toast.error(error.message);
    }

    return <>
        <div className="flex items-center justify-center h-screen">
            <Card>
                <CardHeader>
                    <Logo />
                </CardHeader>
                <CardContent className="flex flex-col space-y-2.5 w-sm">
                    <Button
                        disabled={fetchStatus === "fetching"}
                        onClick={() => sso({ strategy: "oauth_apple" })}
                    >
                        <Apple style={{
                            fill: extract_oklch_from_tw("--primary-foreground"),
                        }}
                            className="size-4" />
                        Sign in with Apple
                    </Button>
                    <Button
                        disabled={fetchStatus === "fetching"}
                        onClick={() => sso({ strategy: "oauth_google" })}
                    >
                        <Google style={{
                            fill: extract_oklch_from_tw("--primary-foreground"),
                        }}
                        className="size-4" />
                        Sign in with Google
                    </Button>
                </CardContent>
                <CardFooter />
            </Card>
        </div>
    </>
}
