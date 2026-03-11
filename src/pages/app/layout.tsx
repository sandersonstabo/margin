import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/pages/app/sidebar";

export const Layout = () => {
    return <>
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                123
            </SidebarInset>
        </SidebarProvider>
    </>
}