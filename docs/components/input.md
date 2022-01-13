---
title: Input 输入框
---

# Input 输入框

## 基本用法
<ClientOnly>
  <InputDocs></InputDocs>
</ClientOnly>

```Vue
<template>
  <div>
    <r-input v-model="value"></r-input>
  </div>
</template>

<script>
import { RInput } from 'rehabilitation-ui';

export default {
  components: {
    'r-input': RInput
  },
  data(){
    return {
      value: 'test'
    }
  }
}
</script>
```

## Attributes

|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| value/v-model | 绑定值 | String | - | - | true
| disabled | 是否禁用 | Boolean | true/false | false | false
| readonly | 是否只读 | Boolean | true/false | false | false

## Input Events
| 事件名称 | 说明 | 回调参数 
| :-----: |:---:| :-----:
| input | 在 Input 值改变时触发 | value: String
| change | 仅在输入框失去焦点或用户按下回车时触发 | value: String
| focus | 在 Input 获得焦点时触发 | event: Event
| blur | 在 Input 失去焦点时触发 | event: Event
