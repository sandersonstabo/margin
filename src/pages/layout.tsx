import "@fontsource-variable/geist/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "@fontsource-variable/outfit/index.css";
import '@fontsource-variable/dm-sans/index.css';
import { Outlet } from "react-router-dom";

import { use_session } from "@/hooks/use-session";

export const Layout = () => {
    const { loading } = use_session();

    if (!loading) {
        return <div>Loading...</div>;
    }

    return <Outlet />;
};
