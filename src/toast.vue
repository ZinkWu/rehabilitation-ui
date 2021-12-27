<template>
  <div class="container" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message" v-html="message" v-if="enableHTML"></div>
      <div class="message" v-else>
        {{ message }} {{ Math.floor(Math.random() * 100) }}
      </div>
      <template v-if="closeButton">
        <div class="line" ref="line"></div>
        <span class="close" @click="clickCloseHandle">{{
          closeButtonOptions.content
        }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    autoClose: {
      type: Boolean,
      default: true,
      required: false,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
      required: false,
    },
    closeButton: {
      type: Boolean,
      default: false,
      required: false,
    },
    closeButtonOptions: {
      type: Object,
      required: false,
      default: function () {
        return {
          content: "关闭",
          callback: null,
        };
      },
    },
    position: {
      type: String,
      default: "bottom",
      validator(val) {
        return ["top", "bottom", "middle"].indexOf(val) >= 0;
      },
    },
    enableHTML: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    toastClasses() {
      return [`position-${this.position}`];
    },
  },
  mounted() {
    this.resetLineHeight();
    this.checkAutoClose();
  },
  methods: {
    checkAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$emit("beforeClose");
      this.$destroy();
    },
    clickCloseHandle() {
      if (
        this.closeButtonOptions &&
        this.closeButtonOptions.callback instanceof Function
      ) {
        this.closeButtonOptions.callback(this);
      }
      this.close();
    },
    resetLineHeight() {
      // in plugin.js, vm.$mount() before document.body.appendChild(), async render
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + "px";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: .3s;
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    & > .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    & > .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: fade-in $animation-duration;
  }
}
.toast {
  animation: fade-in 1s;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-height;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: white;

  & > .message {
    padding: 9px 0;
  }
  & > .line {
    border-left: 1px solid gray;
    // height: 100%;
    margin-left: 16px;
  }
  & > .close {
    padding-left: 16px;
    cursor: default;
    flex-shrink: 0;
  }
}
</style>