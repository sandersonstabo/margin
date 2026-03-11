import { Route, Routes } from "react-router-dom";
import { AuthenticateWithRedirectCallback } from "@clerk/react-router";

import * as Root from "@/pages/layout";
import * as Auth from "@/pages/auth/page";
import * as App from "@/pages/app/layout";

export const Router = () => <>
    <Routes>
        <Route path="/" element={<Root.Layout />}>
            <Route path="auth">
                <Route index element={<Auth.Page />} />
                <Route path="callback" element={<AuthenticateWithRedirectCallback />} />
            </Route>

            <Route index element={<App.Layout />}>

            </Route>
        </Route>
    </Routes>
</>