import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as Root from "@/pages/layout";
import * as Auth from "@/pages/auth/page";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Root.Layout />}>
                <Route path="/auth" element={<Auth.Page />} />
                <Route index element={<div>Margin</div>} />
            </Route>
        </Routes>
    </BrowserRouter>
);
