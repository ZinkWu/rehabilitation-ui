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
import Collapse from '../../../src/collapse/collapse.vue';
import CollapseItem from '../../../src/collapse/collapse-item.vue';
export default {
  components: {
    'r-collapse': Collapse,
    'r-collapse-item': CollapseItem
  },
  data() {
    return {
      activeName: ['1', '2'],
      single: ['2']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>