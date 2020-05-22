---
title: 快速上手
---

# 快速上手

## 开始使用

1.添加 CSS 样式

使用本框架前，请在 css 中开启 border-box

    *,*::before,*::after{box-sizing:border-box;} 

2.引用

- app.js全局引入fliUi(推荐)
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

在使用的组件里引用,下面以 Button 为例
```
import {Button} from 'fli-ui'
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