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
      let { span, offset, pad, narrowPc, pc, widePc } = this;
      let padClass = [];
      if (pad) {
        padClass = [
          pad.span && `pad-col-${pad.span}`,
          pad.offset && `pad-offset-${pad.offset}`,
        ];
      }
      let narrowPcClass = [];
      if (narrowPc) {
        narrowPcClass = [
          narrowPc.span && `narrow-pc-col-${narrowPc.span}`,
          narrowPc.offset && `narrow-pc-offset-${narrowPc.offset}`,
        ];
      }
      let pcClass = [];
      if (pc) {
        pcClass = [
          pc.span && `pc-col-${pc.span}`,
          pc.offset && `pc-offset-${pc.offset}`,
        ];
      }
      let widePcClass = [];
      if (widePc) {
        widePcClass = [
          widePc.span && `wide-pc-col-${widePc.span}`,
          widePc.offset && `wide-pc-offset-${widePc.offset}`,
        ];
      }
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...padClass,
        ...narrowPcClass,
        ...pcClass,
        ...widePcClass
        
      ];
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

  @media (min-width: 577px) {
    $class-prefix: pad-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: pad-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: narrow-pc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: narrow-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }

  @media (min-width: 923px) {
    $class-prefix: pc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: wide-pc-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc($n/24) * 100%;
      }
    }

    $class-prefix: wide-pc-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc($n/24) * 100%;
      }
    }
  }
}
</style>