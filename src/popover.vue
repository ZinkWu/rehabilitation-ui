<template>
  <div class="popover" ref="popover">
    <div
      class="content-container"
      v-if="visible"
      ref="contentContainer"
      :class="[`position-${position}`]"
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom", "left", "right"].indexOf(val) >= 0;
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(val) {
        return ["click", "hover"].indexOf(val) >= 0;
      },
    },
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.switchHandler);
    } else if (this.trigger === "hover") {
      this.$refs.popover.addEventListener("mouseenter", this.hoverOpen);
      this.$refs.popover.addEventListener("mouseleave", this.hoverClose);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.switchHandler);
    } else if (this.trigger === "hover") {
      this.$refs.popover.removeEventListener("mouseenter", this.hoverOpen);
      this.$refs.popover.removeEventListener("mouseleave", this.hoverClose);
    }
  },
  methods: {
    switchHandler() {
      if (this.visible === true) {
        this.close();
      } else {
        this.open();
      }
    },
    hoverOpen() {
      this.visible = true;
      this.$nextTick(() => {
        this.setPositionContent();
      });
    },

    hoverClose() {
      this.visible = false;
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.setPositionContent();
        //popover 的 click 触发后冒泡到 document，期待在 $nextTick 中给 document 添加 click 监听会在冒泡后执行，但并没有，所以使用 setTimeout
        setTimeout(() => {
          document.addEventListener("click", this.eventHandler);
        }, 0);
        console.log(111);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
      console.log(222);
    },
    eventHandler(e) {
      console.log("?");
      if (!this.$refs.contentContainer.contains(e.target)) {
        this.close();
      }
    },
    setPositionContent() {
      const { triggerContainer, contentContainer } = this.$refs;
      document.body.appendChild(contentContainer);
      let { height, width, left, top } =
        triggerContainer.getBoundingClientRect();
      let { height: cHeight, width: cWidth } =
        contentContainer.getBoundingClientRect();
      const positionMap = {
        top: {
          top: top + window.scrollY,
          left: left - (cWidth - width) / 2 + window.scrollX,
        },
        bottom: {
          top: top + window.scrollY + height,
          left: left - (cWidth - width) / 2 + window.scrollX,
        },
        left: {
          top: top - (cHeight - height) / 2 + window.scrollY,
          left: left - cWidth + window.scrollX,
        },
        right: {
          top: top - (cHeight - height) / 2 + window.scrollY,
          left: left + width + window.scrollX,
        },
      };
      contentContainer.style.top = positionMap[this.position].top + "px";
      contentContainer.style.left = positionMap[this.position].left + "px";
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
  padding: 0.5em 1em;
  border-radius: $border-radius;
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
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: $border-color;
      top: 101%;
      left: 50%;
      transform: translateX(-50%);
    }
    &::after {
      border-top-color: white;
      top: calc(101% - 1px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: $border-color;
      bottom: 101%;
      left: 50%;
      transform: translateX(-50%);
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(101% - 1px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &.position-left {
    margin-left: -10px;
    &::before {
      border-left-color: $border-color;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: $border-color;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
    }
    &::after {
      border-right-color: white;
      top: 50%;
      right: calc(100% - 1px);
      transform: translateY(-50%);
    }
  }
}
</style>