import { Link } from "@tanstack/react-router"
import { ChevronDownIcon, FileJson2Icon } from "lucide-react"
import { useState } from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "~/components/ui/sidebar"
import type { FileItem } from "~/types/file-item"

type Props = {
  slug: string
  item: FileItem
}

export function FileTreeItem(props: Props) {
  const params = { _splat: location.pathname }

  const [isOpen, setIsOpen] = useState(true)

  if (typeof props.item.children === "string") {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={params._splat === props.slug}>
          <Link to={`/${props.slug}` as never}>
            <FileJson2Icon className="w-4" />
            <span>{props.item.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronDownIcon />
            {props.item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="mr-0 pr-0">
            {props.item.children.map((item) => (
              <FileTreeItem
                key={item.name}
                slug={`${props.slug}/${item.name}`}
                item={item}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
