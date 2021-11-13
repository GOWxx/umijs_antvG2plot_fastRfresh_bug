# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

bug复现步骤：

一. 
安装依赖后，启动项目
在 @/pages/index.tsx 文件里
更改 new Line() 配置项里的任何内容，保存并重新编译，页面渲染很会怪异

二.
在 .umirc.ts 里
关闭fastRefresh
删除 .umi 下的文件 重启项目
此bug不再复现，怀疑是 fast refresh 产生的某种影响。

