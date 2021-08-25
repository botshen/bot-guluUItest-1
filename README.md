# Ice-UI

[![Build Status](https://app.travis-ci.com/botshen/gulu-Demo.svg?branch=master)](https://app.travis-ci.com/botshen/gulu-Demo)
## 介绍

鑫 UI 是一个基于 Vue 的 UI 组件库，目前包括有 Button、Tabs、Input、Grid、
Layout、Toast、Collapse、Popover 组件。项目尚未完工，持续更新中。

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*,*::before,*::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式。

2. 安装 xin-vue-ui

```bash
npm i --save xin-vue-ui
```

3. 引入 xin-vue-ui

```js
import {Button, ButtonGroup, Icon} from 'xin-vue-ui'
import 'xin-vue-ui/dist/index.css'

export default {
   name: 'app',
   components: {
      'x-button': Button,
      'x-icon': Icon
   }
}
```
## 文档

[前往官网](https://shenxin.space)

## 联系方式

<a href='mailto:363088847@qq.com'>Email</a>