import typescript from "rollup-plugin-typescript2";
const pkg = require("./package.json");

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [typescript()],
  external: ["react", "react/jsx-runtime"],
};