# fli-ui 一个简易的 Vue UI 组件
[![Build Status](https://travis-ci.org/yinlong22/flight-UI.svg?branch=master)](https://travis-ci.org/yinlong22/flight-UI)
## 介绍
一套基于Vue开发的组件库，无依赖、体积小、简单易用

## 特点

- 使用ES6最新语法编写，基于Vue框架实现的代码，适合新手阅读
- 源码非常精简，可以自由拓展组件功能
- 基于Webpack和Babel的最新版本构建,兼容多种引入方式

## 开始使用

1.添加 CSS 样式

使用本框架前，请在 css 中开启 border-box

    *,*::before,*::after{box-sizing:border-box;} 

2.引用

- app.js全局引入fliUi(不推荐)

```
import {Button,ButtonGroup,Row,Col,Header,Footer,Content,Sider,Layout,Icon,Input,Toast,plugin,Tabs,TabsHead,TabsBody,TabsItem,Collapse,CollapseItem,Popover} from 'fli-ui'
import 'flight-ui/dist/index.css'

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input', Input)
Vue.component('f-row', Row)
Vue.component('f-col', Col)
Vue.component('f-layout', Layout)
Vue.component('f-header', Header)
Vue.component('f-footer', Footer)
Vue.component('f-sider', Sider)
Vue.component('f-content', Content)
Vue.component('f-toast', Toast)
Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)
Vue.component('f-popover', Popover)
Vue.component('f-collapse', Collapse)
Vue.component('f-collapse-item', CollapseItem)

```
- 模块化引用

在使用的组件里使用

```
import Button from 'fli-ui'
    export default {
        components: {
            'f-button': Button,
        },
```

组件最外层的元素会自动添加f-*的类名，你也可以在外层添加自己的容器元素包裹组件，并添加自己的类名，覆盖默认样式

3.点击该项目上方链接，获取使用方法

## 运行

通过如下步骤可以直接运行项目：

    1.git clone git@github.com:yinlong22/flight-UI.git
    2.npm install
    3.npm run start
运行入口为src/app.js文件，该文件中是各个组件的使用代码，可以在此引用全部组件，自由修改测试

### 启动

    npm run docs:dev

### 构建

    npm run docs:build
    
## 打包

    npm run build

## 文档
本项目文档使用vuepress进行构建，在docs目录下有各个组件的说明及示例 如果你想添加自己组件的文档，在编辑完成对应的文件后需要重新打包项目，最后将生成的文件重新部署

具体使用方法可以参考[官方文档](https://vuepress.vuejs.org/zh/)

## 说明
本项目的开发目的，主要是个人对于技术的学习、研究、总结。其次能完成好用的ui组件使用，希望对你有帮助

## 参考

本组件库参考了一些比较成熟的UI框架，包括但不限于外观、API设计、甚至源码实现，特此感谢这些开源社区的贡献者

- [Element](https://element.eleme.cn/#/zh-CN)
- [iView](https://www.iviewui.com/)
- [wheels](https://github.com/FrankFang/wheels)
- [bootstrap](https://www.bootcss.com/)

