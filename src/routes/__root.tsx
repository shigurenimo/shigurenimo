import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { FileJson2Icon } from "lucide-react"
import { FileTreeItem } from "~/components/file-tree-item"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "~/components/ui/sidebar"
import { fileTree } from "~/data/file-tree"

export const Route = createRootRoute({
  component: Component,
})

function Component() {
  return (
    <SidebarProvider>
      <Sidebar className="z-20">
        <SidebarHeader className="px-4">
          <h1>{"shigurenimo"}</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{"files"}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to={"/"}>
                      <FileJson2Icon className="w-4" />
                      <span>{"README.md"}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {fileTree.map((item) => (
                  <FileTreeItem key={item.name} slug={item.name} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <Outlet />
    </SidebarProvider>
  )
}
