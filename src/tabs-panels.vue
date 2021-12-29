<template>
  <div class="tabs-panels">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  created(){
    this.eventBus.$on('tabsItemClick', (name)=>{
      console.log(`panel: ${name}`);
    })
  }
}
</script>

<style lang="scss" scoped>
.tabs-panels{

}
</style>