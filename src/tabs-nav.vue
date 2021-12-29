<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="actions-container">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['eventBus']
};
</script>

<style lang="scss" scoped>
$height: 40px;
.tabs-nav {
  display: flex;
  align-items: center;
  border: 1px solid red;
  height: $height;
  & > .actions-container{
    margin-left: auto;
  }
}
</style>