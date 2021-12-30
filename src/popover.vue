<template>
  <div class="popover" @click.stop="trigger">
    <div class="content-container" v-if="visible" ref="content" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    visible(val) {
      if (val) {
        document.addEventListener("click", this.eventHandler);
      } else {
        document.removeEventListener("click", this.eventHandler);
      }
    },
  },
  methods: {
    trigger() {
      this.visible = !this.visible;
    },
    eventHandler() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  & > .content-container {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>