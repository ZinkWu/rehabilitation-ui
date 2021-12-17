<template>
  <svg class="r-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.r-icon {
  width: 1em;
  height: 1em;
}
</style>