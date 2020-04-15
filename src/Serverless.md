# Serverless

## 自我介绍

靳振国

Github：https://github.com/jingle1267
Email:jinzhenguo@126.com

## 目录

1. Serverless是什么
2. Serverless的特点
3. Serverless与前端
4. Serverless优劣势
5. Serverless应用场景
6. Q&A

## 1. Serverless是什么

###  

> CNCF（Cloud Native Computing Foundation）：

> Serverless computing refers to the concept of building and running applications that do not require server management. It describes a finer-grained deployment model where applications, bundled as one or more functions, are uploaded to a platform and then executed, scaled, and billed in response to the exact demand needed at the moment.

###  

> 云原生计算基金会：

> 无服务器计算是指开发者在构建和运行应用时无需管理服务器等基础设施。应用被解耦为细粒度的函数，函数是部署和运行的基本单位。用户只为实际使用的资源付费。可见，serverless 计算能够帮助应用开发者摆脱服务器等底层基础设施管理的负担，专注于业务层的创新。

### 

Serverless技术的兴起，让FaaS成为继IaaS、PaaS、SaaS之后一种新的计算能力提供方式，它让用户更加聚焦业务本身，而无需关注复杂的服务器配置和管理，包括弹性部署和自动扩容等工作全部交给云厂商，省去了大量的运维操作。


## 2. Serverless的特点

###  

![Serverless-features](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/08-10-52-08-Serverless-features.png)

### 2.1 事件驱动

函数在 FaaS 平台中，需要通过一系列的事件来驱动函数执行。

### 2.2 无状态

因为每次函数执行，可能使用的都是不同的容器，无法进行内存或数据共享。如果要共享数据，则只能通过第三方服务，比如 ```Redis``` 等。

### 2.3 无运维

使用serverless我们不需要管理底层基础设施，不需要关心运维，也不用关心扩容，这也是serverles思想的核心。

### 2.4 低成本

按需付费。使用 Serverless 成本很低，因为我们只需要为每次函数的运行付费。函数不运行，则不花钱，也不会浪费服务器资源过度。


## 3. Serverless与前端

### 3.1 Serverless在前端的应用

前端已经在用Serverless架构了？

###  

CDN：我们开发完成之后，直接将静态文件部署到 CDN 上，通过 CDN 进行内容分发、网络加速，在这个过程中，前端不需要关心 CDN 有多少个节点、如何做负载均衡，也不需要知道 CDN 的 QPS 是多少。所以从这个角度来说，CDN 是一种 serverless 的实现。

### 

对象存储：我们只需要将文件上传到对象存储，就可以直接使用了，不需要关心它如何存取文件、如何进行权限控制，所以对象存储对前端来说是 Serverless。

### 3.2 前端开发模式演进

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/08-12-04-21-frontend-process.png)

###  

1. 基于模板的渲染
2. 基于AJAX的前后端分离
3. 基于Node.js的前后端工程化
4. 基于Node.js的全站开发

### 3.3 前端与微服务

BFF（Backend For Frontend）：

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/08-12-53-15-EvolutionofBFF_8003911266125f52d2bffca7ac16fac3.png)

###  

传统BFF痛点：

1. 运维成本相对较高

2. 入口分散难管理

3. 重复开发难避免

###  

基于Serverless的BFF架构：

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/08-13-00-52-292e25633f4eade86e58e0fba558fd1257af186d.png)

### 3.4 前端与Serverless

Serverless = FaaS + BaaS

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/08-12-16-40-305c9a3bda190b2b307bea2495a1dce597d1189d.png)

###  

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/08-12-45-11-Screen%20Shot%202020-03-08%20at%2012.18.36%20PM.png)


## 4. Serverless缺点

###  

1. 作为新兴的计算模型，缺乏标准化和生态系统成熟度；

2. 由于运行时更具动态性，与IaaS和PaaS相比，调试更具挑战性；

3. 因为按需调用收费，空闲时间实例被回收，可能会出现冷启动带来的性能问题；

4. 复杂情况下（例如，触发其他功能），对于相同逻辑，可能有更多的操作表面积；


## 5. Serverless应用场景

### Serverless服务商

![](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/03/10-14-49-44-Serverless-company-product.webp)

### 

- 领导者：AWS（Lambda）、微软Azure（Functions）

- 强劲表现者：腾讯云、谷歌云、阿里云、Nimbella、IBM（OpenWhisk）、Cloudflare、Google（Cloud Functions）

- 挑战者：Oracle

### 应用场景1：后端应用场景

![后端应用场景](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/15-11-17-50-%E6%97%A0%E6%9C%8D%E5%8A%A1%E5%BA%94%E7%94%A8%E5%90%8E%E5%8F%B0.jpg)

### 应用场景2：人工智能应用场景

![人工智能应用场景](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/15-11-18-08-%E6%97%A0%E6%9C%8D%E5%8A%A1%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD.jpg)

### 应用场景3：实时数据处理场景

![实时数据处理场景](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/15-11-18-20-%E6%97%A0%E6%9C%8D%E5%8A%A1%E5%AE%9E%E6%97%B6%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86.jpg)

### 应用场景4：AaaS 认证即服务场景

![AaaS 认证即服务场景](https://raw.githubusercontent.com/jingle1267/image-host/master/2020/04/15-11-18-30-%E6%97%A0%E6%9C%8D%E5%8A%A1%E8%AE%A4%E8%AF%81%E5%8D%B3%E6%9C%8D%E5%8A%A1.jpg)


## 6. Q&A

Less is more.
