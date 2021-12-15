<template>
  <button @click="$emit('click')" class="r-button" :class="{ [`icon-${iconPosition}`]: true }">
    <r-icon  v-if="icon && !loading" class="icon" :name="icon"></r-icon>
    <r-icon v-if="loading" class="loading icon" name="loading"></r-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import Icon from './icon'
export default {
  components: {
    rIcon: Icon
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    icon: {
      type: String,
      requierd: false,
    },
    iconPosition: {
      type: String,
      requierd: false,
      default: "left",
      validator: function(value){
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}

.r-button {
  color: #000;font-size: var(--font-size);height: var(--button-height);
  border-radius: var(--border-radius);background: var(--button-bg);
  border: 1px solid var(--border-color);display: inline-flex;padding: 0 1em;
  justify-content: center;align-items: center;vertical-align: middle;

  > .icon {order: 1; margin-right: .1em}
  > .content {order: 2;}
  &.icon-right {
    > .icon {order: 2; margin-left: .1em; margin-right: 0;}

    > .content {order: 1;}
  }
  &:hover {border-color: var(--border-color-hover);}
  &:active {background: var(--button-active-bg);}
  &:focus {outline: none;}

  .loading{
    animation: spin 1s linear infinite;
  }
}
</style>