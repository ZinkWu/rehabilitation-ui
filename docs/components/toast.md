---
title: Toast
---

# Toast

## 基本用法
<ClientOnly>
  <ToastDocs></ToastDocs>
</ClientOnly>

::: tip
该组件作为插件使用
:::
```JavaScript
// main.js
import { Toast } from 'rehabilitation-ui'
Vue.use(Toast)
```

```Vue
<template>
  <div class="container">
    <r-button @click="autoClose">click me</r-button>
    <r-button @click="top">top</r-button>
    <r-button @click="middle">middle</r-button>
    <r-button @click="manualClose">自定义关闭按钮</r-button>
  </div>
</template>

<script>
import { RButton } from 'rehabilitation-ui';

export default {
  components: {
    'r-button': RButton,
  },
  methods: {
    manualClose(){
      this.$toast({
        propsData: {
          message: '我可以自定义关闭按钮',
          autoClose: false,
          closeButton: true,
          closeButtonOptions: {
            content: 'close',
            callback: function(){
              console.log('this is callback')
            }
          }
        }
      })
    },
    autoClose() {
      this.$toast({
        propsData: {
          message: 'toast content'
        }
      })
    },
    top(){
      this.$toast({
        propsData: {
          message: 'toast content',
          position: 'top'
        }
      })
    },
    middle(){
      this.$toast({
        propsData: {
          message: 'toast content',
          position: 'middle'
        }
      })
    }
  }
}
</script>

<style lang="scss">
.r-button{
  margin-right: 1em;
}
</style>
```

## Attributes

| 参数 | 说明 |  类型  | 可选值 | 默认值 | required 
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| message | 内容 | String | - | - | true 
| autoClose | 是否自动关闭 | Boolean | true/false | true | false 
| autoCloseDelay | 延时自动关闭 | Number | 0 | 2 | false 
| closeButton | 是否显示关闭按钮 | Boolean | true/false | false | false 
| closeButtonOptions | 自定义关闭按钮 | Object: {content, callback} | - | {content: '关闭', callback: null} | false 
| position | 出现位置 | String | top/middle/bottom | bottom | false