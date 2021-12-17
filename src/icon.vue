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
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.r-icon {
  width: 1em;
  height: 1em;
}
</style>