# 轱辘 - 一个 Vue UI 组件

[![Build Status](https://travis-ci.com/botshen/gulu-Demo.svg?branch=main)](https://travis-ci.com/botshen/gulu-Demo)

## 介绍

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
* {box-sizing: border-box;}

*::before {box-sizing: border-box;}

*::after {box-sizing: border-box;}
```

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）。

```html
html {
--button-height: 32px;
--font-size: 14px;
--button-bg: white;
--button-active-bg: #eee;
--border-radius: 4px;
--color: #333;
--border-color: #999;
--border-color-hover: #666;
}
```

IE 15 及以上浏览器都支持此样式。

2. 安装 gulu

```shell
npm i --save gulu-20210526
```

3. 引入 gulu

```vue
  import {Button, ButtonGroup, Icon} from 'gulu-20210526'
  import 'gulu-20210526/dist/index.css'
  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```

4. 引入 svg symbols

  ```javascript
  <script src="//at.alicdn.com/t/font_2539366_d7ujabs2nc7.js"></script>
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
