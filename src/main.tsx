import { StrictMode, type ReactElement } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

const construct_root = (element: ReactElement) => {
  const root = document.getElementById("root")

  if (!root) throw new Error("Root element #root was not found")

  createRoot(root).render(element)
}

construct_root(
  <StrictMode>
    <p>Hello</p>
  </StrictMode>
)
