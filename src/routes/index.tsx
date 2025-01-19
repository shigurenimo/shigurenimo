import { createFileRoute, useParams } from "@tanstack/react-router"
import { ClipboardCopyIcon } from "lucide-react"
import { Suspense } from "react"
import { codeToHtml } from "shiki"
import { CodeEditor } from "~/components/code-editor"
import { Button } from "~/components/ui/button"
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import { Separator } from "~/components/ui/separator"
import { fileTree } from "~/data/file-tree"
import { findFile } from "~/lib/find-file"
import { getShikiLang } from "~/lib/get-shiki-lang"

export const Route = createFileRoute("/")({
  component: Component,
})

function Component() {
  const params = useParams({ from: Route.id })

  const file = findFile(fileTree, "/")

  const placeholder = "// file not found"

  const code: string =
    typeof file?.children === "string" ? file.children : placeholder

  const html = codeToHtml(code, {
    lang: getShikiLang("md"),
    theme: "dark-plus",
    transformers: [
      {
        pre(node) {
          if (typeof node.properties.style === "string") {
            node.properties.style = node.properties.style.replace(
              "#1E1E1E",
              "transparent",
            )
          }
        },
      },
    ],
  })

  return (
    <main className="flex h-svh flex-1 flex-col overflow-hidden">
      <div className="sticky top-0 left-0 z-10 bg-card">
        <div className="flex items-center justify-between gap-2 px-4 py-2">
          <span>{"README.md"}</span>
          <Button size={"sm"} variant={"outline"}>
            <ClipboardCopyIcon />
          </Button>
        </div>
        <Separator />
      </div>
      <div className="flex flex-col-reverse lg:flex-1 lg:flex-row lg:overflow-hidden">
        <ScrollArea className="lg:flex-1">
          <Suspense fallback={<div className="p-4">{"loading..."}</div>}>
            <CodeEditor html={html} />
          </Suspense>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Separator orientation="vertical" className="hidden lg:block" />
        <Separator className="block lg:hidden" />
        <ScrollArea className="max-w-sm lg:flex-1">
          <div className="lg:flex-1">
            <div className="p-4">
              <p>{"ここに説明を書きたい。"}</p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </main>
  )
}
