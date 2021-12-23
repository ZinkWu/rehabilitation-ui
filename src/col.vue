<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = (value) => {
  let valid = true;
  Object.keys(value).forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
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
    pad: {
      type: Object,
      required: false,
      validator,
    },
    narrowPc: {
      type: Object,
      required: false,
      validator,
    },
    pc: {
      type: Object,
      required: false,
      validator,
    },
    widePc: {
      type: Object,
      required: false,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClasses() {
      let { span, offset } = this;
      let target = ["pad", "narrowPc", "pc", "widePc"];
      let result = [];
      target.forEach((item) => {
        if (this[item]) {
          result.push(
            this[item].span ? `${item}-col-${this[item].span}` : `${item}-col-0`
          );
          result.push(
            this[item].offset
              ? `${item}-offset-${this[item].offset}`
              : `${item}-offset-0`
          );
        }
      });
      return [span && `col-${span}`, offset && `offset-${offset}`, ...result];
    },
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  $class-prefix: col-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      width: calc($n/24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 0 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: calc($n/24) * 100%;
    }
  }

  @media (min-width: 577px) {
    $class-prefix: pad-col-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: pad-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: narrowPc-col-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: narrowPc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }

  @media (min-width: 923px) {
    $class-prefix: pc-col-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: pc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: widePc-col-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: widePc-offset-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }
}
</style>