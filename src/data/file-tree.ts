import type { FileItem } from "~/types/file-item"

import config_cursorrules from "~/../.cursorrules?raw"
import config_vscode_settings_json from "~/../.vscode/settings.json?raw"
import config_biome_json from "~/../biome.json?raw"
import config_bunfig_toml from "~/../bunfig.toml?raw"

const content = `console.log("hello")`

export const fileTree: FileItem[] = [
  {
    name: "config",
    children: [
      {
        name: "README.md",
        children: content,
      },
      {
        name: ".github",
        children: [
          {
            name: "copilot-instructions.md",
            children: config_cursorrules,
          },
        ],
      },
      {
        name: ".vscode",
        children: [
          {
            name: "settings.json",
            children: config_vscode_settings_json,
          },
        ],
      },
      {
        name: ".cursorrules",
        children: config_cursorrules,
      },
      {
        name: "biome.json",
        children: config_biome_json,
      },
      {
        name: "bunfig.toml",
        children: config_bunfig_toml,
      },
    ],
  },
  {
    name: "code",
    children: [
      {
        name: "README.md",
        children: content,
      },
    ],
  },
]
