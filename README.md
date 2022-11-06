# vue-skeleton

## Vue骨架屏实践  

学习原文
 <https://segmentfault.com/a/1190000014963269>

 原文问题
 sass版本有问题启动不了
 webpack-cli与webpack版本不匹配，api报错

 基于改进
 升级 webpack
 使用eslint prettier
 使用yarn

## 使用步骤

node skeleton.js 在index.html插入骨架屏样式

npm run dev  启动客户端，app.js未初始化会使用骨架屏样式，vue实例化后样式被替换

npm run build 打包代码
