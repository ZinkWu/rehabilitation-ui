---
title: 快速上手
---

#  Get Started
::: warning
使用前，请在根组件`App.vue`中引入css文件：`import 'rehabilitation-ui/dist/index.css'`
:::

## 引入资源
```
import {RButton} from "rehabilitation-ui-demo";
import "rehabilitation-ui/dist/index.css";
```

## 注册组件
```JavaScript
export default {
  name: "ComponentName",
  components: {
    "r-button": RButton,
  },
}
```

## 使用
```Vue
<template>
  <div>
    <r-button>按钮</r-button>
  </div>
</template>
```

<ClientOnly>
  <GetStartedDocs></GetStartedDocs>
</ClientOnly>