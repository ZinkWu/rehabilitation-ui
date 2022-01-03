<template>
  <div class="popover" @click.stop="trigger">
    <div
      class="content-container"
      v-if="visible"
      ref="contentContainer"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <span class="trigger-container" ref="triggerContainer">
      <slot></slot>
    </span>
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
        this.$nextTick(() => {
          const {triggerContainer, contentContainer} = this.$refs
          document.body.appendChild(contentContainer);
          document.addEventListener("click", this.eventHandler);
          let {height, width, left, top} = triggerContainer.getBoundingClientRect()
          console.log(triggerContainer.getBoundingClientRect());
          contentContainer.style.top = top + window.scrollY + 'px'
          contentContainer.style.left = left + window.scrollX + 'px'
        });
      } else {
        document.removeEventListener("click", this.eventHandler);
      }
    },
  },
  methods: {
    trigger(e) {
      console.log(111);
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
  & > .trigger-container {
    display: inline-block;
  }
}
.content-container {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>