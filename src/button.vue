<template>
  <button
    @click="$emit('click')"
    class="r-button"
    :class="{ [`icon-${iconPosition}`]: true }"
  >
    <r-icon v-if="icon && !loading" class="icon" :name="icon"></r-icon>
    <r-icon v-if="loading" class="loading icon" name="loading"></r-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    rIcon: Icon,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    icon: {
      type: String,
      requierd: false,
    },
    iconPosition: {
      type: String,
      requierd: false,
      default: "left",
      validator: function (value) {
        return ["left", "right"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$button-height: 32px;
$button-bg: white;
$font-size: 14px;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.r-button {
  color: #000;
  font-size: $font-size;
  height: $button-height;
  border-radius: $border-radius;
  background: $button-bg;
  border: 1px solid $border-color;
  display: inline-flex;
  padding: 0 1em;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }

    > .content {
      order: 1;
    }
  }
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }

  .loading {
    animation: spin 1s linear infinite;
  }
}
</style>