<template>
  <div class="r-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `The child element of <r-button-group> should be <buttom>, but you are using <${name}>`
        );
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.r-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .r-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      z-index: 1;
      position: relative;
    }
  }
}
</style>