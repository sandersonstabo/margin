import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarFooter, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";
import { use_auth } from "@/hooks/use-auth";
import { IconSelector } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/custom/logo";

const User = () => {
    const { actor } = use_auth();

    return <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="py-6 px-2 justify-between">
                    <div className="flex flex-row items-center justify-start gap-1">
                        <Avatar className="ring">
                        <AvatarImage src={actor?.imageUrl} />
                    </Avatar>
                    <Separator className="bg-primary" orientation="vertical" />
                    <div className="flex flex-col text-start">
                        <span className="">{actor?.firstName} {actor?.lastName}</span>
                        <span className="text-xs font-semibold">{actor?.primaryEmailAddress?.emailAddress}</span>
                    </div>
                    </div>
                    <IconSelector />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                123
            </DropdownMenuContent>
        </DropdownMenu>
    </>
}

export const AppSidebar = () => <>
    <Sidebar>
        <SidebarHeader>
            <Logo />
        </SidebarHeader>
        <SidebarContent>
            123
        </SidebarContent>
        <SidebarFooter>
            <User />
        </SidebarFooter>
    </Sidebar>
</>
