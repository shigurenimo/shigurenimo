export type FileItem =
  | {
      name: string
      icon?: string
      children: FileItem[]
    }
  | {
      name: string
      icon?: string
      children: string
    }
