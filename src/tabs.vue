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
  props: {
    selected: {
      type: [String, Number],
      required: true,
    },
    // TODO:纵向显示
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
    if (this.$children.length === 0) {
      if (console && console.warn) {
        console.warn(
          "the child compoent of the tabs component  shoud be tab-nav and tab-body."
        );
      }
    }
    this.eventBus.$emit("tabsItemClick", this.selected);
  },
};
</script>

<style lang="scss" scoped>
</style>