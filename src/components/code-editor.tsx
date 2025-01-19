import { use } from "react"

type Props = {
  html: Promise<string>
}

export function CodeEditor(props: Props) {
  const html = use(props.html)

  return (
    <div
      className="line-numbers"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
