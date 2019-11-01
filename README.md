# 我的 sliders

[![Build Status](https://travis-ci.org/jingle1267/sliders.svg?branch=master)](https://travis-ci.org/jingle1267/sliders)

可以直接把 markdown 文件转换成 revealjs 的 ppt 文件, 配合 Github， gh-pages 可以很方便的制作 ppt.

## 使用方式

### 克隆项目(可以 fork 到自己的仓库)

    git clone https://github.com/teddy-ma/sliders.git
    cd sliders

### 安装依赖(确保 node 环境已安装)

    npm install

### 编辑 slider

在 `src` 目录下新建 `xxx.md` 文件, 然后执行以下命令生成 html

    npm run build


### 预览

    npm run start

然后访问 [http://localhost:8000/](http://localhost:8000/)

### 清理构建

    npm run clean
