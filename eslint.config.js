import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-hooks/rules-of-hooks": "error", // Enforce rules of hooks
      "react-hooks/exhaustive-deps": "warn", // Check effect dependencies
      "no-unused-vars": "warn", // Show unused vars as warnings
    },
  },
];

// import js from "@eslint/js";
// import globals from "globals";
// import reactPlugin from "eslint-plugin-react";
// import reactHooks from "eslint-plugin-react-hooks";

// export default [
//   js.configs.recommended,
//   {
//     plugins: {
//       react: reactPlugin,
//       "react-hooks": reactHooks,
//     },
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.es2020,
//       },
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//     rules: {
//       ...reactPlugin.configs.recommended.rules,
//       ...reactHooks.configs.recommended.rules,
//       "react/jsx-uses-vars": "error", // Critical for catching undefined components
//       "no-undef": "error", // Should catch undefined variables
//     },
//   },
// ];