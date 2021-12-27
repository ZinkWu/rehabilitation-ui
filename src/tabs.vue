<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "Horizontal",
      validator(val) {
        return ["Horizontal", "Vertical"].indexOf(val) >= 0;
      },
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // this.$emit('update:selected', 'xxx')
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>