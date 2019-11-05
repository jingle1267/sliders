# 我分享的 sliders

[![Build Status](https://travis-ci.org/jingle1267/sliders.svg?branch=master)](https://travis-ci.org/jingle1267/sliders)

可以直接把 markdown 文件转换成在线的 PPT。 核心使用 revealjs 讲 MD 文档转换成的 ppt 文件, 并使用 Github 的 gh-pages 可以很方便在线显示。

## 使用方式

### 安装依赖

```npm
npm install
```

### 构建

创建的 markdown 文件放到 src 目录下面，markdown 文件名称尽量避免使用中文，然后执行构建命令，打包生成静态 HTML。

```npm
npm run build
```

### 预览

```npm
npm run start
```

然后访问 [http://localhost:8000/](http://localhost:8000/)。**支持动态修改更新。**

### 清理构建

```npm
npm run clean
```

访问我的在线的 sliders：[https://94275.cn/sliders/](https://94275.cn/sliders/)
