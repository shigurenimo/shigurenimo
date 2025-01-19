import type { FileItem } from "~/types/file-item"

/**
 * 再帰的にファイルを取り出す関数
 * @param items - ファイルツリーのアイテム
 * @param targetPath - 探すファイルのパス
 * @returns ファイル情報
 */
export function findFile(
  items: FileItem[],
  targetPath: string,
  currentPath = "",
): FileItem | null {
  for (const item of items) {
    if (`${currentPath}/${item.name}` === targetPath) {
      return item
    }

    if (typeof item.children === "object") {
      const found = findFile(
        item.children,
        targetPath,
        currentPath ? `${currentPath}/${item.name}` : item.name,
      )
      if (found) {
        return found
      }
    }
  }

  return null
}
