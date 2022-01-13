---
title: Collapse
---

# Collapse

## 基本用法
<ClientOnly>
  <CollapseDocs></CollapseDocs>
</ClientOnly>

```Vue
<template>
  <div class="container">
    多选模式
    <r-collapse v-model="activeName" style="margin-bottom: 20px">
      <r-collapse-item name="1" title="title 1">content 1</r-collapse-item>
      <r-collapse-item name="2" title="title 2">content 2</r-collapse-item>
      <r-collapse-item name="3" title="title 3">content 3</r-collapse-item>
    </r-collapse>

    手风琴模式
    <r-collapse v-model="single" accordion>
      <r-collapse-item name="1" title="title 1">content 1</r-collapse-item>
      <r-collapse-item name="2" title="title 2">content 2</r-collapse-item>
      <r-collapse-item name="3" title="title 3">content 3</r-collapse-item>
    </r-collapse>
  </div>
</template>

<script>
import { RCollapse, RCollapseItem } from 'rehabilitation-ui';

export default {
  components: {
    'r-collapse': RCollapse,
    'r-collapse-item': RCollapseItem
  },
  data() {
    return {
      activeName: ['1', '2'],
      single: ['2']
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 400px;
}
</style>
```

## Attributes

### Collapse
|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| v-model/activeNames | 当前选中 | Array | - | - | true
| accordion | 手风琴模式 | Boolean | true/false | false | false

### CollapseItem
|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| title | 标题 | String | - | - | true
| name | 唯一标识符 | String | - | - | true