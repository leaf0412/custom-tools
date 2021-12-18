import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import esbuild from 'rollup-plugin-esbuild';
import path from 'path';

export default {
  input: 'src/index.ts',
  banner: '/*eslint-disable */',
  output: [
    {
      file: 'dist/bundle-umd.js',
      name: 'umd', // 使用 umd 必须填写 name
      format: 'umd', // umd 兼容 amd / cjs / iife 打包格式
      banner: '#!/usr/bin/env node',
    },
    {
      file: 'dist/bundle-iife.js',
      name: 'iife',
      format: 'iife',
      plugins: [],
    },
    {
      file: 'dist/bundle-cjs.js',
      // name: 'cjs',
      format: 'cjs',
    },
  ],
  plugins: [
    alias({
      entries: {
        '@root': path.resolve(__dirname),
      },
    }),
    nodeResolve(),
    commonjs(),
    json(),
    typescript(),
    esbuild({
      // minify: true,
    }),
  ],
};
