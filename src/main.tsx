import { RouterProvider, createRouter } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"
import { routeTree } from "./routeTree.gen"

import "~/main.css"

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const container = document.getElementById("app")!

if (container === null) {
  throw new Error("Container not found")
}

const root = ReactDOM.createRoot(container)

root.render(<RouterProvider router={router} />)
