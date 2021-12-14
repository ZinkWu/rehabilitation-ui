<template>
  <div class="r-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.r-button-group {
  display: inline-flex;
  vertical-align: middle;
  >.r-button{
    border-radius: 0;
    margin-left: -1px;
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{ 
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      z-index: 1;
      position: relative;
    }
  }
}
</style>