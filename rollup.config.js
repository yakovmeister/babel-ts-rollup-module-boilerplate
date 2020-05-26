import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const base = {
  plugins: [
    typescript(),
    terser()
  ]
}

export default [
  Object.assign(
    {},
    base,
    {
      input: "src/index.ts",
      output: {
        format: 'cjs',
        file: "dist/index.min.js"
      }
    }
  )
];
