<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line" v-show="lineVisible"></div>
    <div class="actions-container">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"],
  data() {
    return {
      lineVisible: false,
    };
  },
  mounted() {
    if (this.eventBus) {
      this.eventBus.$on("resetLine", (vm) => {
        // TODO: 这里有bug，getBoundingClientRect是相对视口的位置，如果外部元素有padding之类，分割线显示位置不正常
        let { left, width } = vm.$el.getBoundingClientRect();
        console.log(vm.$el.getBoundingClientRect());
        let lineEl = this.$refs.line;
        lineEl.style.width = `${width}px`;
        lineEl.style.transform = `translateX(${vm.$el.offsetLeft}px)`;
        this.lineVisible = true;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
$height: 40px;
$active-color: #409eff;
.tabs-nav {
  display: flex;
  align-items: center;
  height: $height;
  position: relative;
  border-bottom: 1px solid #ddd;
  & > .actions-container {
    margin-left: auto;
    padding: 0 1em;
  }
  & > .line {
    transition: all 100ms linear;
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $active-color;
  }
}
</style>