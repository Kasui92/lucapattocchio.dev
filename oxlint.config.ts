import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "import"],
  categories: {
    correctness: "error",
    suspicious: "error",
  },
  rules: {
    "no-shadow": "off",
    "no-unused-vars": ["error", { fix: { imports: "safe-fix" } }],
    "import/no-unassigned-import": ["error", { allow: ["**/*.css"] }],
  },
});
