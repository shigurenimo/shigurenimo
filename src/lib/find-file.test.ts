import { expect, test } from "bun:test"
import type { FileItem } from "~/types/file-item"
import { findFile } from "./find-file"

test("ファイルを再帰的に探す", () => {
  const items: FileItem[] = [
    {
      name: "home.ts",
      children: "content",
    },
    {
      name: "project1",
      children: [
        {
          name: "file1",
          children: "content",
        },
        {
          name: "directory1",
          children: [
            {
              name: "file2",
              children: "content",
            },
            {
              name: "file3",
              children: "content",
            },
          ],
        },
      ],
    },
  ]

  const file1 = findFile(items, "home.ts")
  expect(file1?.name).toBe("home.ts")

  const file2 = findFile(items, "file1")
  expect(file2?.name).toBe("file1")

  const file3 = findFile(items, "file2")
  expect(file3?.name).toBe("file2")

  const file4 = findFile(items, "file3")
  expect(file4?.name).toBe("file3")

  const file5 = findFile(items, "not-found")
  expect(file5).toBeUndefined()
})
