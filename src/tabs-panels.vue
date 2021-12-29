<template>
  <div class="tabs-panels" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: [Number, String],
      required: true,
    },
  },
  created() {
    this.eventBus.$on("tabsItemClick", (name) => {
      this.active = name === this.name;
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs-panels {
}
</style>