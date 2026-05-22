import type { ITtscLintConfig } from "@ttsc/lint"

export default {
  ignores: [
    "build/**",
    "docs/**",
    "node_modules/**",
    "packages/**",
    "playground/**",
    "src/driver/mongodb/{typings.ts,bson.typings.ts}",
    "temp/**",
  ],
  format: {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    trailingComma: "all",
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
  },
} satisfies ITtscLintConfig
