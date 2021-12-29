<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line" v-show="showLine"></div>
    <div class="actions-container">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  data(){
    return {
      showLine: false
    }
  },
  mounted(){
    this.eventBus.$on('resetLine', (vm) => {
      let {left, width} = vm.$el.getBoundingClientRect()
      let lineEl = this.$refs.line
      lineEl.style.width = `${width}px`
      lineEl.style.transform = `translateX(${left}px)`
      this.showLine = true
    })
  }
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
  & > .actions-container{
    margin-left: auto;
  }
  &>.line{
    // transform: translateX();
    transition: all 100ms linear;
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $active-color;
  }
}
</style>