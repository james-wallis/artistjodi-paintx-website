module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "@/components",
    "@/assets",
    "public/",
    "^[./]",
  ],
  importOrderSeparation: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
