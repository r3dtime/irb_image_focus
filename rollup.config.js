import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
    {
        input: "src/index.js", // your entry point
        output: {
            name: "irb_image_focus", // package name
            file: pkg.iife,
            format: "iife",
            sourceMap: 'inline',
            compact: true
        },
        plugins: [
            resolve(),
            commonjs(),
            terser(),
            babel({
                exclude: ["node_modules/**"],
            }),
        ],
    },
    {
        input: "src/index.js", // your entry point
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
        plugins: [
            babel({
                exclude: ["node_modules/**"],
            }),
        ],
    },
];