import type { ITtscLintConfig } from "@ttsc/lint";

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
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    eqeqeq: "error",
    "object-shorthand": "error",
    "no-unneeded-ternary": "error",
    "prefer-template": "error",
    "no-useless-rename": "error",
    "dot-notation": "error",
    "no-extra-boolean-cast": "error",
    "no-useless-escape": "error",
    "prefer-as-const": "error",
    "prefer-namespace-keyword": "error",
  },
} satisfies ITtscLintConfig;
