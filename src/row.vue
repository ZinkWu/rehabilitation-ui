<template>
  <div
    class="row"
    :style="{ marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [String, Number],
      required: false,
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.$data.gutter = this.gutter;
    });
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>