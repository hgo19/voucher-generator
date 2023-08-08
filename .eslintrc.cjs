module.exports = {
  env: {
      "es2022": true,
      "node": true
  },
  extends: [
      "eslint:recommended",
      "standard-with-typescript",
      "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.cjs'],
  overrides: [
      {
          env: {
              node: true
          },
          files: [
              ".eslintrc.{js,cjs}"
          ],
          parserOptions: {
              "sourceType": "script"
          }
      }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: "ES2022",
      sourceType: "module",
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname
  },
  plugins: [
      "@typescript-eslint"
  ],
  rules: {
    "new-cap": 0
  }
}