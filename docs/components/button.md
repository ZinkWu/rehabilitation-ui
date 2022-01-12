---
title: Button 按钮
---

# 按钮 Button

<ClientOnly>
  <ButtonDocs></ButtonDocs>
</ClientOnly>

```vue
<r-button>按钮</r-button>
<r-button icon="settings">含有icon</r-button>
<r-button icon="settings" iconPosition="right">icon设置位置</r-button>
<r-button :loading="loading" @click="loading = !loading">click me</r-button>
<r-button disabled>disabled</r-button>
```