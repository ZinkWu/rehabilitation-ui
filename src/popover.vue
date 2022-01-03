<template>
  <div class="popover" ref="popover">
    <div
      class="content-container"
      v-if="visible"
      ref="contentContainer"
      :class="[`position-${position}`]"
    >
      <slot name="content" :close="close"></slot>
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
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.switchHandler);
    } else if (this.trigger === "hover") {
      this.$refs.popover.removeEventListener("mouseenter", this.open);
      this.$refs.popover.removeEventListener("mouseleave", this.close);
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
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.setPositionContent();
        //popover 的 click 触发后冒泡到 document，期待在 $nextTick 中给 document 添加 click 监听会在冒泡后执行，但并没有，所以使用 setTimeout
        setTimeout(() => {
          document.addEventListener("click", this.eventHandler);
        }, 0);
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.eventHandler);
    },
    eventHandler(e) {
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
    &::after,
    &::before {
      left: 50%;
      border-bottom: none;
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
  &.position-bottom {
    margin-top: 10px;
    &::after,
    &::before {
      left: 50%;
      transform: translateX(-50%);
      border-top: none;
    }
    &::before {
      border-bottom-color: $border-color;
      bottom: 101%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(101% - 1px);
    }
  }
  &.position-left {
    margin-left: -10px;
    &::after,
    &::before {
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      border-left-color: $border-color;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::after,
    &::before {
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      border-right-color: $border-color;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>