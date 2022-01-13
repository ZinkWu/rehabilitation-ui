---
title: Grid
---

# Grid

## 基本用法
<ClientOnly>
  <GridDocs></GridDocs>
</ClientOnly>

```Vue
<template>
  <div>
    <r-row class="r-row">
      <r-col :span="24"><div class="grid-content bg-purple-dark"></div></r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="12"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="12"><div class="grid-content bg-purple-light"></div></r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="8"><div class="grid-content bg-purple-light"></div></r-col>
      <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-purple-light"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="6"><div class="grid-content bg-purple-light"></div></r-col>
    </r-row>
    <r-row class="r-row">
      <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-purple-light"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-purple-light"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
      <r-col :span="4"><div class="grid-content bg-purple-light"></div></r-col>
    </r-row>
  </div>
</template>

<script>
import { RRow, RCol } from 'rehabilitation-ui';

export default {
  components: {
    'r-row': RRow,
    'r-col': RCol
  },
}
</script>

<style lang="scss">
.r-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.r-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
```

## Attributes

### Row
|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| gutter | 栅格间隔 | String/Number | - | - false
| align | 子元素水平位置 | String | left/center/right | - | false

### Col
::: tip
如果你指定了其他设备响应式样式，那么默认 span/offset 会在手机宽度下生效（最大宽度小于 577px 时）
:::

|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| span | 栅格占据的列数 | String/Number | 0~24 | 24 | false
| offset | 栅格左侧的间隔格数 | String/Number| 0~24 | 0 | false
| pad | 在 pad 宽度(577px)下响应式样式 | Object: {span: String/Number, offset: String/Number} | - | - |false
| pad | 在 narrowPc 宽度(769px)下响应式样式 | Object: {span: String/Number, offset: String/Number} | - | - |false
| pad | 在 pc 宽度(923px)下响应式样式 | Object: {span: String/Number, offset: String/Number} | - | - |false
| pad | 在 widePc 宽度(1200px)下响应式样式 | Object: {span: String/Number, offset: String/Number} | - | - |false