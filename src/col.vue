<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: gray;
  border: 1px solid red;
  width: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc($n/24) * 100%;
    }
  }
}
</style>