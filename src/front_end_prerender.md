# 首帧加载速度优化-构建时预渲染

## 目录

1. 白屏的影响
2. 为什么会白屏
3. 业界的解决办法
4. 预渲染

## 1. 白屏的影响

###  

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/28-13-56-50-web_performance_affects.png)

## 2. 为什么会白屏

###  

浏览器渲染包含 HTML 解析、DOM 树构建、CSSOM 构建、JavaScript 解析、布局、绘制等等。

###  

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/28-11-15-56-html_render_process.png)

### 

- 等待 HTML 文档返回，此时处于白屏状态。
- 对 HTML 文档解析完成后进行首屏渲染，因为项目中对加了灰色的背景色，因此呈现出灰屏。
- 进行文件加载、JS 解析等过程，导致界面长时间出于灰屏中。
- 当 Vue 实例触发了 mounted 后，界面显示出大体框架。
- 调用 API 获取到时机业务数据后才能展示出最终的页面内容。

### 对比 FP、FCP、FMP 这三个时期 DOM 的差异

### FP

FP：仅有一个 div 根节点。

### 

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/28-14-49-33-html_fp.png)

### FCP

FCP：包含页面的基本框架，但没有数据内容。

###  

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/28-14-50-09-html_fcp.png)

### FMP

FMP：包含页面所有元素及数据。

####  

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/28-14-50-27-html_fmp.png)

## 3. 业界的解决办法

自JavaScript诞生以来，前端技术发展非常迅速。
移动端白屏优化是前端界面体验的一个重要优化方向，Web 前端诞生了 SSR 、CSR、预渲染等技术。

### 渲染方案对比

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/05/07-09-59-22-Screen%20Shot%202020-05-07%20at%209.55.44%20AM.png)

#### 所谓同构，顾名思义就是同一套代码，既可以运行在客户端（浏览器），又可以运行在服务器端（node）。

## 4. 预渲染

### 4.1 预渲染方案

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/28-14-54-09-html_prerender_process.png)

从流程图上，需要在发布机上启动模拟的浏览器环境，并通过预渲染的事件钩子获取当前的页面内容，生成最终的 HTML 文件。

### 4.2 构建时编译

现在用的比较多的插件： [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) 、 [Puppeteer](https://github.com/GoogleChrome/puppeteer)、[Prerender SPA Plugin](https://www.npmjs.com/package/prerender-spa-plugin)、[phantomjs-prebuilt](https://www.npmjs.com/package/phantomjs-prebuilt)

### 4.3 流程变更

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/29-11-30-26-fe_process.png)

### 

预渲染的时候，静态资源没有上线CDN，需要先通过请求劫持处理

### 4.4 预渲染效果

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/29-11-39-55-fe_fcp_performance.png)

### 4.5 不足

1. 不适用内容经常变更的页面

2. 不适用LBS或千人千面推荐页面


