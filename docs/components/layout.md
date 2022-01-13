---
title: Layout 默认布局
---

# Layout 默认布局

## 基本用法
<ClientOnly>
  <LayoutDocs></LayoutDocs>
</ClientOnly>

```Vue
<template>
  <div>
    <div class="container">
      <r-layout>
        <r-header class="bg-header">header</r-header>
        <r-layout>
          <r-sider class="bg-sider">sider</r-sider>
          <r-content class="bg-content">content</r-content>
        </r-layout>
        <r-footer class="bg-footer">footer</r-footer>
      </r-layout>
    </div>
    
    <div class="container">
      <r-layout>
        <r-header class="bg-header">header</r-header>
        <r-content class="bg-content">content</r-content>
        <r-footer class="bg-footer">footer</r-footer>
      </r-layout>
    </div>
  </div>
</template>

<script>
import {
  RLayout,
  RHeader,
  RSider,
  RContent,
  RFooter
} from 'rehabilitation-ui';

export default {
  components: {
    'r-layout': RLayout,
    'r-header': RHeader,
    'r-sider': RSider,
    'r-content': RContent,
    'r-footer': RFooter
  },
}
</script>

<style lang="scss">
.container {
  height: 200px;
  margin-bottom: 20px;
}
.bg-header.bg-footer {
  background-color: #b3c0d1;
}
.bg-content {
  background-color: #e9eef3;
}
.bg-sider {
  background-color: #d3dce6;
  width: 10em;
}
</style>

```