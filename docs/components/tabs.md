---
title: Tabs 标签页
---

# Tabs 标签页

## 基本用法
<ClientOnly>
  <TabsDocs></TabsDocs>
</ClientOnly>

```Vue
<r-tabs v-model="selected">
  <r-tabs-nav>
    <r-tabs-item name="1">tab 1</r-tabs-item>
    <r-tabs-item name="2" disabled>tab 2</r-tabs-item>
    <r-tabs-item name="3">tab 3</r-tabs-item>
  </r-tabs-nav>

  <r-tabs-body>
    <r-tabs-panels name="1">内容1</r-tabs-panels>
    <r-tabs-panels name="2">内容2</r-tabs-panels>
    <r-tabs-panels name="3">内容3</r-tabs-panels>
  </r-tabs-body>
</r-tabs>
```
```JavaScript
export default {
  data(){
    return {
      selected: '1'
    }
  }
}
```

## Attributes

### Tabs
|       参数      |      说明      |  类型   | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| v-model/selected | 当前选中 | String、Number | - | - | true

### TabsItem
|       参数      |      说明      |  类型   | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| name | 唯一标识，必选 | String、Number | - | - | true
| disabled | 是否禁用 | Boolean | true、false | false | false

### TabsPanels
|       参数      |      说明      |  类型   | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| name | 唯一标识，必选 | String、Number | - | - | true