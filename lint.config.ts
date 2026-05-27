import type { ITtscLintConfig } from "@ttsc/lint"

// Aligned with the legacy eslint.config.mjs per the
// benchmark-fixtures-audit policy. The legacy side originally extended
// js.configs.recommended + ts.configs.recommendedTypeChecked (~85
// rules); this config has always shipped only no-var and prefer-const.
// The audit picked Path A (trim legacy) for typeorm rather than
// expanding ttsc-lint, because expanding to 85 rules would surface
// hundreds of new violations across the ~495 source files and block
// the bench cell entirely. See
// .discussions/benchmark-fixtures-audit/alignment-typeorm.md.
export default {
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
