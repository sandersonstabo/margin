import "@fontsource-variable/geist/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "@fontsource-variable/outfit/index.css";
import '@fontsource-variable/dm-sans/index.css';

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { use_auth } from "@/hooks/use-auth";
import { Spinner } from "@/components/ui/spinner";

export const Layout = () => {
    const { pathname } = useLocation();
    const { loading, signed_in } = use_auth();

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <Spinner />
        </div>;
    }

    if (!signed_in && !pathname.startsWith("/auth")) {
        return <Navigate replace to="/auth" />;
    }

    if (signed_in && pathname === "/auth") {
        return <Navigate replace to="/" />;
    }

    return <Outlet />;
};
