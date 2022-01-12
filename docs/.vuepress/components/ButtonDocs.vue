<template>
  <div>
    <r-button>按钮</r-button>
    <r-button icon="settings">含有icon</r-button>
    <r-button icon="settings" iconPosition="right">icon设置位置</r-button>
    <r-button :loading="loading" @click="loading = !loading">click me</r-button>
    <r-button disabled>disabled</r-button>
    <hr>
    <p>button-group</p>
    <r-button-group>
      <r-button>上一页</r-button>
      <r-button>更多</r-button>
      <r-button>下一页</r-button>
    </r-button-group>
  </div>
</template>

<script>
import Button from '../../../src/button.vue';
import ButtonGroup from '../../../src/button-group.vue';
export default {
  components: {
    'r-button': Button,
    'r-button-group': ButtonGroup
  },
  data(){
    return {
      loading: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>