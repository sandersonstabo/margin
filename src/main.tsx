import { Router } from "@/components/custom/router";
import { construct_root } from "@/utils/create-root";
import { AppProviders } from "@/components/custom/app-providers";

import "@/styles/fonts.css";
import "@/styles/main.css";

construct_root({ element: (
      <AppProviders>
        <Router />
      </AppProviders>
)});
