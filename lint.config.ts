import type { ITtscLintConfig } from "@ttsc/lint"

export default {
  ignores: [
    "build/**",
    "docs/**",
    "node_modules/**",
    "packages/**",
    "playground/**",
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
    // Prettier and ttsc format disagree on call-arg wrapping when a trailing
    // line comment pushes a single-line call over printWidth (the "// Null
    // bytes aren't allowed in comments" pattern in driver/* and a few
    // util/reducer call sites). Disable the print-width reflow so the
    // formatter is byte-identical with prettier across both branches.
    "format/print-width": "off",
  },
} satisfies ITtscLintConfig
