### 配置 rollup.config.js

```
amd – 异步模块定义，用于像RequireJS这样的模块加载器
cjs – CommonJS，适用于 Node 和 Browserify/Webpack
esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
umd – 通用模块定义，以amd，cjs 和 iife 为一体
```

#### 安装需要的第三方库

```bash
// 用来将CommonJS模块转换为ES6
npm i -D @rollup/plugin-commonjs

//  集成 typescript
npm i -D @rollup/plugin-typescript

// 将.json文件转换为ES6模块
npm i -D @rollup/plugin-json

// 使用 Node 解析算法定位模块，以便在 node_modules 中使用第三方模块
npm i -D @rollup/plugin-node-resolve
```

#### 创建 rollup.config.js

```js
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.browser,
    name: 'ltools', // 使用 umd 必须填写 name
    format: 'umd', // umd 兼容 amd / cjs / iife 打包格式
  },
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
  ],
  // 指出应将哪些模块视为外部模块
  external: ['lodash'],
};
```
