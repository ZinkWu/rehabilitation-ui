<template>
  <div>
    <r-button>按钮</r-button>
    <r-button icon="settings">含有icon</r-button>
    <r-button icon="settings" iconPosition="right">icon设置位置</r-button>
    <r-button :loading="loading" @click="loading = !loading">click me</r-button>
    <r-button disabled>disabled</r-button>
  </div>
</template>

<script>
import Button from '../../../src/button.vue';
export default {
  components: {
    'r-button': Button
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