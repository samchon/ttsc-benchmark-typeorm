import { defineConfig } from "eslint/config"
import ts from "typescript-eslint"

const __dirname = import.meta.dirname

// Aligned with @ttsc/lint per the benchmark-fixtures-audit policy.
//
// The upstream typeorm config extends `js.configs.recommended` and
// `ts.configs.recommendedTypeChecked` plus the jsdoc, unicorn, and
// chai-friendly plugin presets, exposing roughly 85 effective rules on
// `**/*.ts`. The ttsc-lint side ships only `no-var` and `prefer-const`
// (see lint.config.ts), so the original cross-tool comparison ran on a
// ~85:2 rule imbalance.
//
// Path A from the audit policy (trim legacy): drop every preset and
// keep only the two rules that have a counterpart in the ttsc-lint
// config. See `.discussions/benchmark-fixtures-audit/alignment-typeorm.md`
// for the dropped rule list.
//
// Notes:
//   - The `@typescript-eslint` plugin is registered (no rules enabled)
//     so that the codebase's pre-existing inline `eslint-disable
//     @typescript-eslint/*` comments resolve. Without the registration
//     ESLint v10 fails with `Definition for rule X was not found`.
//   - `prefer-const` keeps the upstream `destructuring: "all"` option
//     because ttsc-lint's `prefer-const` intentionally skips
//     destructuring entirely (see linthost/rules_var.go), so the
//     ESLint-default `destructuring: "any"` would surface destructure
//     violations the ttsc-lint side never reports.
//   - `parserOptions.project` is omitted because neither rule needs the
//     type checker; the typescript-eslint parser is kept so `**/*.ts`
//     files parse at all.
export default defineConfig([
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: ts.parser,
            parserOptions: {
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            "@typescript-eslint": ts.plugin,
        },
        rules: {
            "no-var": "error",
            "prefer-const": ["error", { destructuring: "all" }],
        },
    },
])
