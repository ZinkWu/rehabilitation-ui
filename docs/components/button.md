---
title: Button 按钮
---

# Button 按钮

## 基本用法
<ClientOnly>
  <ButtonDocs></ButtonDocs>
</ClientOnly>

```Vue
<r-button>按钮</r-button>
<r-button icon="settings">含有icon</r-button>
<r-button icon="settings" iconPosition="right">icon设置位置</r-button>
<r-button :loading="loading" @click="loading = !loading">click me</r-button>
<r-button disabled>disabled</r-button>

<!-- 按钮组 -->
<r-button-group>
  <r-button>上一页</r-button>
  <r-button>更多</r-button>
  <r-button>下一页</r-button>
</r-button-group>
```

```JavaScript
<script>
import {RButton, RButtonGroup} from 'rehabilitation-ui';

export default {
  components: {
    'r-button': RButton
    'r-button-group': RButtonGroup
  },
  data(){
    return {
      loading: false
    }
  }
}
</script>
```

## Attributes

### Button
|参数| 说明 |  类型  | 可选值 | 默认值 | required
| :-------------: |:-------------:| :-----:|:-----:|:-----:|:-----:|
| icon         | 设置内置的icon  | String      | setting，info，left，right，download，loading，thumbs-up，down| -- | false
| iconPosition | 图标位置        | String      | left、right | left  | false
| loading      | 加载状态        | Boolean     | true、false | false | false
| disabled     | 是否禁用        | Boolean     | true、false | false | false