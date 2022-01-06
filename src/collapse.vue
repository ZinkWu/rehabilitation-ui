<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
   model: {
    prop: "activeName",
    event: "avtived",
  },
  props: {
    activeName: {
      type: [Array],
      required: true,
    },
    accordion: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  provide(){
    return {
      activeName: this.activeName,
      accordion: this.accordion
    }
  }
};
</script>

<style lang="scss" scoped>
$gray: #ddd;
$border-radius: 4px;
.collapse{
  border: 1px solid $gray;
  border-radius: $border-radius;
}
</style>