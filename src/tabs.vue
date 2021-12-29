<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  model: {
    prop: "selected",
    event: "selected",
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  watch: {
    selected(val) {
      console.log(`tabs watch: ${val}`);
    },
  },
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "Horizontal",
      validator(val) {
        return ["Horizontal", "Vertical"].indexOf(val) >= 0;
      },
    },
  },
  created() {
    this.eventBus.$on("tabsItemClick", (name) => {
      this.$emit("selected", name);
    });
  },
  mounted() {
    this.eventBus.$emit("tabsItemClick", this.selected);
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>