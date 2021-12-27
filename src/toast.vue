<template>
  <div class="toast" ref="container">
    <div class="message" v-html="message" v-if="enableHTML"></div>
    <div class="message" v-else>
      {{ message }}
    </div>
    <template v-if="closeButton">
      <div class="line" ref="line"></div>
      <span class="close" @click="clickCloseHandle">{{
        closeButtonOptions.content
      }}</span>
    </template>
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
    enableHTML: {
      type: Boolean,
      default: false,
      required: false,
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
          this.$refs.container.getBoundingClientRect().height + "px";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
  & > .message{
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