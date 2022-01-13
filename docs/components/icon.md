---
title: Icon 图标
---

# Icon 图标

## 基本用法
<ClientOnly>
  <IconDocs></IconDocs>
</ClientOnly>

```Vue
<template>
  <div>
    <r-icon name="thumbs-up"></r-icon>
  </div>
</template>

<script>
import { RIcon } from 'rehabilitation-ui';

export default {
  components: {
    'r-icon': RIcon
  }
}
</script>
```

## Attributes

|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| name | 选择图标 | String | info、error、loading、left、right、down、thumbs-up、settings、download | - | true
