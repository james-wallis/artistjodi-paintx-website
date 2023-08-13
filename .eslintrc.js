module.exports = {
  plugins: ["@typescript-eslint", "no-relative-import-paths"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    // Enforce Absolute Imports https://nextjs.org/docs/advanced-features/module-path-aliases
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: true },
    ],
    "prettier/prettier": "error",
  },
};
