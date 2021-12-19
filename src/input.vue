<template>
  <div class="wrapper" :class="{ error: errorMessage }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('input', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <template v-if="errorMessage">
      <r-icon name="error" class="icon-error"></r-icon>
      <span class="error-message">{{ errorMessage }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    "r-icon": Icon,
  },
  props: {
    value: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-color-disabled: #bbb;
$border-radius: 4px;
$color-disabled: #bbb;
$padding: 0 8px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$color-error: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: $padding;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      border-color: $border-color-disabled;
      color: $color-disabled;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $color-error;
      &:hover {
        border-color: $color-error;
      }
    }
  }
  > .icon-error {
    fill: $color-error;
  }
  > .error-message {
    color: $color-error;
  }
}
</style>