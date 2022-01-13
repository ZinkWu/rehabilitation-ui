<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RehabLayout',
  data(){
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted(){
    this.$children.forEach(vm => {
      if(vm.$options.name === "RehabSider"){
        this.layoutClass.hasSider = true
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.layout{
  display: flex;
  flex-direction: column;
  height: 100%;
  &.hasSider{
    flex-direction: row;
  }
}
</style>