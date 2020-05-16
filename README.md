# fli-ui 一个简易的 Vue UI 组件
[![Build Status](https://travis-ci.org/yinlong22/flight-UI.svg?branch=master)](https://travis-ci.org/yinlong22/flight-UI)
## 介绍
这是我在学习 Vue 的过程中做的一个 UI 框架，希望对你有用

## 开始使用
1.添加 CSS 样式

使用本框架前，请在 css 中开启 border-box

    *,*::before,*::after{box-sizing:border-box;} 

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```
 :root {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 5px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }
```

IE 15 及以上浏览器都支持此样式

2.安装fliUi
```
npm i --save fli-ui
```
3.引入 fli-ui
```
import {Button,ButtonGroup,Icon} from 'fli-ui'
import 'flight-ui/dist/index.css'

export default{
    name:'app',
    components:{
        'g-button':Button,
        'g-icon':Icon
    }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
