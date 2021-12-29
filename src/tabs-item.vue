<template>
  <div class="tabs-item" @click="switchHandle" :class="itemClasses">
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
      type: [String, Number],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    itemClasses() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  created() {
    this.eventBus.$on("tabsItemClick", (name) => {
      this.active = name === this.name;
      if (name === this.name) {
        this.active = true;
        this.eventBus.$emit("resetLine", this);
      } else {
        this.active = false;
      }
    });
  },
  methods: {
    switchHandle() {
      if (this.disabled) {
        return;
      }
      this.eventBus.$emit("tabsItemClick", this.name, this);
    },
  },
};
</script>

<style lang="scss" scoped>
$active-color: #409eff;
$disabled-color: gray;
.tabs-item {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;
  cursor: pointer;
  &.active {
    color: $active-color;
    & > .r-icon {
      fill: $active-color;
    }
  }
  &.disabled {
    color: $disabled-color;
    cursor: noet;
  }
}
</style>