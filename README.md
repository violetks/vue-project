# vue-project
基于vue、element-ui、Node.js实现的一个后台管理项目
## 简介
vue-project是一个简易的文章后台管理项目，它基于[vue.js](https://github.com/vuejs/vue)、[element-ui](https://github.com/ElemeFE/element)、[vue-cli](https://cli.vuejs.org/zh/)、[Node.js](http://nodejs.org/)、[Express](http://www.expressjs.com.cn/)、[axios](https://github.com/axios/axios)，请求数据使用[mongoose](http://www.mongoosejs.net/)进行模拟，本项目主要用于学习项目的构建。
## 前序准备
- 安装[Node.js](http://nodejs.org/)
- 安装[vue-cli](https://cli.vuejs.org/zh/)，之后才能通过`vue create`命令创建项目
- 安装[mongodb](https://www.mongodb.com/)，[mongodb安装与配置](https://www.cnblogs.com/minily/p/9431609.html)
```
npm install -g @vue/cli
```
## 项目创建过程
### 1.打开cmd，使用命令`vue create project-name`创建项目，会提示选择一个预置模板，这里选择手动配置`Manually select features`
![1.PNG](/read_img/1.PNG)
### 2.下图中选择Babel、Router、Linter/Formatter三项，然后回车
![2.PNG](/read_img/2.PNG)
### 3.设置为带#号形式的路由
![3.PNG](/read_img/3.PNG)
### 4.下面都是默认设置，一路回车开始构建项目
![4.PNG](/read_img/4.PNG)
### 5.构建完成后，进入项目目录
- 安装[elementUI](https://element.eleme.cn/#/zh-CN)
```
vue add element
```
![5.PNG](/read_img/5.PNG)
- 安装[Express](http://www.expressjs.com.cn/)
```
$ npm install express --save
```
- 安装[mongoose](http://www.mongoosejs.net/)，是nodeJS提供连接 mongodb的一个库
```
npm i mongoose -g
```
- 安装axios，Axios 是一个基于 promise 的 HTTP 库，简单的讲就是可以发送get、post请求。
```
npm i axios
```
- 安装nodemon工具，监听代码文件的变动之后，自动重启后端服务器。
```
cnpm install -g nodemon
```
- 安装**treer**：命令行生成目录结构的实用小工具
```
$ npm install treer -g
# 生成目录
$ treer
# 指定目录
$ treer -d <指定路径>
# 导出结果到文件中
$ treer -e <导出路径>
# 忽略指定的目录
$ treer -i <"文件名，支持正则表达式">

$ treer -d D:\vue-project -i "/node_modules|.git/" -e dir.txt
```
### 6.看一下项目的初始结构
```
D:\vue-project
├─src
|  ├─App.vue                // 入口页面
|  ├─main.js                // 入口 加载组件 初始化等
|  ├─views                  // view
|  |   ├─About.vue
|  |   └Home.vue
|  ├─router                 // 路由
|  |   └index.js
|  ├─plugins
|  |    └element.js
|  ├─components             // 全局公用组件
|  |     └HelloWorld.vue
|  ├─assets                 // 主题 字体等静态资源
|  |   └logo.png
├─public
|   ├─favicon.ico
|   └index.html             // html模板
├─node_modules
├─.browserslistrc
├─.eslintrc.js
├─babel.config.js
├─package-lock.json
├─package.json
├─README.md
```
### 7.用VS Code打开项目
```
npm run serve     // terminal运行项目
```
看到的入口界面，对应的布局在App.vue。App.vue中引入了HelloWorld.vue组件。
![6.PNG](/read_img/6.PNG)

然后可以在App.vue中通过下面标签使用组件。
```
<HelloWorld msg="Welcome to Your Vue.js App"/>
```
HelloWorld.vue中有一个动态`msg`

![7.PNG](/read_img/7.PNG)

views中的页面引入组件可以如下
```
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
```

### 8.模拟后端接口
新建文件夹api，新建文件index.js，测试后端接口代码

![8.PNG](/read_img/8.PNG)

```
npm i express@next mongoose cors
```
启动后端接口，访问[http://localhost:3001/](http://localhost:3001/)，页面显示hello!
```
nodemon api
```
此时后端接口启动在[http://localhost:3001/](http://localhost:3001/)，前端接口启动在[http://localhost:8080/](http://localhost:8080/)

### 10.在main.js引入axios，创建axios实例