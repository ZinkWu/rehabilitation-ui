<template>
  <div class="popover" @click="trigger" ref="popover">
    <div class="content-container" v-if="visible" ref="contentContainer">
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
          const { contentContainer } = this.$refs;
          document.body.appendChild(contentContainer);
          this.setPositionContent();
          //popover 的 click 触发后冒泡到 document，期待在 $nextTick 中给 document 添加 click 监听会在冒泡后执行，但并没有，所以使用 setTimeout
          setTimeout(() => {
            document.addEventListener("click", this.eventHandler);
          }, 0);
        });
      } else {
        document.removeEventListener("click", this.eventHandler);
      }
    },
  },
  methods: {
    trigger() {
      this.visible = !this.visible;
    },
    eventHandler(e) {
      if (!this.$refs.contentContainer.contains(e.target)) {
        this.visible = false;
      }
    },
    setPositionContent() {
      const { triggerContainer, contentContainer } = this.$refs;
      let { height, width, left, top } =
        triggerContainer.getBoundingClientRect();
      let { height: cHeight, width: cWidth } =
        contentContainer.getBoundingClientRect();
        console.log('cWidth', cWidth, width);
      contentContainer.style.top = top + window.scrollY + "px";
      contentContainer.style.left = left - ((cWidth - width) / 2) + window.scrollX + "px";
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
$border-radius: 4px;
$border-color: #333;
.content-container {
  position: absolute;
  border: 1px solid $border-color;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
  padding: 0.5em 1em;
  border-radius: $border-radius;
  margin-top: -10px;
  word-break: break-all;
  max-width: 20em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  &::before,
  &::after {
    content: "";
    display: block;
    height: 0px;
    width: 0px;
    border: 8px solid transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
    border-top-color: $border-color;
    top: 101%;
  }
  &::after {
    border-top-color: white;
    top: calc(101% - 1px);
  }
}
</style>