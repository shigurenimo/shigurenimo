export function getShikiLang(path: string) {
  if (path.endsWith(".md")) {
    return "markdown"
  }
  if (path.endsWith(".css")) {
    return "css"
  }
  if (path.endsWith(".json")) {
    return "json"
  }
  return "tsx"
}
