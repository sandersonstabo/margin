import { Logo } from "@/components/custom/logo";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple } from "@/components/custom/providers/apple";
import { Google } from "@/components/custom/providers/google";
import { extract_oklch_from_tw } from "@/utils/extract-oklch-from-tw";

export const Page = () => {
    return <>
        <div className="flex items-center justify-center h-screen">
            <Card>
                <CardHeader>
                    <Logo />
                </CardHeader>
                <CardContent className="flex flex-col space-y-2 w-sm">
                    <Button>
                        <Apple style={{
                            fill: extract_oklch_from_tw("--accent"),
                        }}
                            className="size-4" />
                        Sign in with Apple
                    </Button>
                    <Button>
                        <Google style={{
                            fill: extract_oklch_from_tw("--accent"),
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
