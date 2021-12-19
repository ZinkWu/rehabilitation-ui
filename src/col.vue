<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div style="border: 1px solid black">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
      required: false,
    },
    offset: {
      type: [Number, String],
      required: false,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc($n/24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc($n/24) * 100%;
    }
  }
}
</style>