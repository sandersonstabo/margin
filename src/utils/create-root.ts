import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";

import { expect } from "@/utils/expect";

export type ConstructRootProps = {
    element: ReactNode;
};

export const construct_root = ({ element }: ConstructRootProps) => {
    const root = expect(
        document.getElementById("root"),
        "Root element #root was not found",
    );
    
    createRoot(root).render(element);
};
