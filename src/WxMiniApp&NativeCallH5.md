# 小程序介绍&原生和H5交互

### 概要

1. 微信小程序介绍
2. 原生和H5交互
3. Q&A

### 微信小程序介绍

1. 小程序的限制
2. 小程序与H5交互
3. Kepler
4. 开发相关小程序

#### 1.1 小程序的限制

1. 服务器域名
2. 业务域名
3. 次数限制
4. 数量限制
5. 推送限制
6. 其他限制

##### 1.1.1 服务器域名

​    request域名、socket域名、upload域名、download域名

##### 1.1.2 业务域名

1. web-view(个人和海外类型小程序不支持使用) 
2. 业务域名校验（iframe也需要添加）

##### 1.1.3 次数限制

| 功能       | 功能介绍             | 次数    |
| ---------- | -------------------- | ------- |
| 小程序头像 | 小程序的logo         | 5次/月  |
| 介绍       | 小程序的介绍信息     | 5次/月  |
| 服务类目   | 小程序的分类(类目)   | 3次/月  |
| 服务器域名 | 小程序访问的接口域名 | 5次/月  |
| 业务域名   | H5页面的域名         | 50次/年 |

##### 1.1.4 数量限制

| 限制           | 介绍                                        | 数量     |
| -------------- | ------------------------------------------- | -------- |
| 服务器域名     | 主要包括：request、socket、upload、download | 20个 * 4 |
| 小程序业务域名 | 小程序可以配置的H5页面的域名                | 20个     |
| 单业务域名     | 每个域名最多可以添加小程序校验文件的数量    | 20个     |

##### 1.1.5 推送限制

| 推送方式 | 所需参数 | 参数说明                                        |
| -------- | -------- | ----------------------------------------------- |
| 提交表单 | formid   | 7天内1次提交表单可下发1条，多次提交下发条数独立 |
| 支付     | payid    | 7天内1次支付可下发3条，多次支付下发条数独立     |

##### 1.1.6 其他限制

1. 正式版和体验版，接口和业务H5连接必须是HTTPS
2. 小程序相互跳转，必须绑定同一个公众号
3. APP打开小程序的场景可以返回APP，其他都不可以
4. 微信联合登录，必须要点击button且设置open-type

#### 1.2 小程序与H5交互

##### 1.2.1 小程序发消息给H5

只能在链接中添加参数

##### 1.2.2 H5发消息给小程序

wx.miniProgram.postMessage

[https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html?search-key=web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html?search-key=web-view)

#### 1.3 Kepler

1. 接入开普勒
2. 三个关键的参数

##### 1.3.1 接入开普勒

1. [获取代码](https://cf.jd.com/pages/viewpage.action?pageId=107874531)，研发kepler沈鹏(shenpeng5)
2. [申请子商户号](https://cf.jd.com/pages/viewpage.action?pageId=107874531)，产品kepler许维龙(xuweilong1)
3. 微信联合登录，产品登录团队周锦红(zhoujinhong1)
4. 拼购，研发拼购刘文(liuwen12)

##### 1.3.2 三个关键的参数

```js
// 1. 通天塔标识
wxAppName=kepler
// 2. 拼购订单标识
PTAG=xxxxx.x.x
// 3. 拼购特需参数
cookie={"appkey":"appkey","source":"3_4","customerinfo":""}

// PS：通天塔的链接是mini，例如
// https://pro.m.jd.com/mini/active/3FJ3gMNjt7BytQA8nYySW5Zsirnd/index.html
```

#### 1.4 开发相关小程序

##### 1.4.1 小程序助手：

![小程序助手](/sliders/assets/images/weixin/wxmini_dev.jpg)

##### 1.4.2 小程序实例：

![小程序示例](/sliders/assets/images/weixin/wxmini_try.jpg)

##### 1.4.3 小程序数据助手：

![小程序数据助手](/sliders/assets/images/weixin/wxmini_data.jpg)

### 原生和H5交互

1. 应用内部交互
2. 应用外部交互

#### 2.1 应用内部交互

##### 2.1.1 原生调用H5

1. 链接添加参数
2. 直接调用H5定义的JS方法

##### 2.1.2 H5调用原生

1. 直接调用原生注册的方法(存在安全隐患)
2. 通过[prompt](http://www.w3school.com.cn/jsref/met_win_prompt.asp)重新定义协议
3. sheme方式

#### 2.2 应用外部交互

##### 2.2.1 scheme方式

```html
<a href="[scheme]://[host]/[path]?[query]"> 唤起应用 </a>
```

[H5唤起原生应用](http://ihongqiqu.com/2015/12/03/html-call-native-app/)

##### 2.2.2 App Links

![App Links Verifier](http://ihongqiqu.com/imgs/post/app_links_verifier.png)

[Android App Links](http://ihongqiqu.com/2015/12/18/App-Links/)

### Q&A



