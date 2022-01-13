---
title: Popover 弹出框
---

# Popover 弹出框

## 基本用法
<ClientOnly>
  <PopoverDocs></PopoverDocs>
</ClientOnly>

```Vue
<template>
  <div class="container">
    <r-popover class="mr">
      <template slot="content">content</template>
      <r-button>从上方出现</r-button>
    </r-popover>

    <r-popover position="bottom" class="mr">
      <template slot="content">content</template>
      <r-button>从下方出现</r-button>
    </r-popover>

    <r-popover position="left" class="mr">
      <template slot="content">content</template>
      <r-button>从下方出现</r-button>
    </r-popover>

    <r-popover position="right" class="mr">
      <template slot="content">content</template>
      <r-button>从下方出现</r-button>
    </r-popover>

    <r-popover class="mr" trigger="hover">
      <template slot="content">content</template>
      <r-button>hover触发</r-button>
    </r-popover>
  </div>
</template>

<script>
import { RButton, RPopover } from 'rehabilitation-ui';
export default {
  components: {
    'r-button': Button,
    'r-popover': Popover
  }
}
</script>

<style>
.mr {
  margin-right: 1em;
}
</style>
```

## Attributes

|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| position | 出现位置 | String | top/bottom/left/right | top | false
| tigger | 触发方式 | String | click/hover | click | false