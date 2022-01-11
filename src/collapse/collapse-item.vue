<template>
  <div class="collapseItem">
    <div class="title" @click="clickHandler">
      {{ title }}
    </div>
    <div class="content" v-if="unfold">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["activeName", "accordion"],
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      unfold: false,
    };
  },
  watch: {
    activeName(val) {
      if (this.accordion) {
        if (val.indexOf(this.name) < 0) {
          this.close();
        }
      }
    },
  },
  methods: {
    clickHandler() {
      if (this.unfold) {
        this.close();
      } else {
        this.open();
      }
      this.$emit("actived", this.activeName);
    },
    open() {
      this.unfold = true;
      if (this.accordion) {
        this.activeName.pop();
        this.activeName.push(this.name);
      } else {
        this.activeName.push(this.name);
      }
    },
    close() {
      this.unfold = false;
      const index = this.activeName.indexOf(this.name);
      if (index >= 0) {
        this.activeName.splice(index, 1);
      }
    },
  },
  created() {
    this.unfold = this.activeName.indexOf(this.name) >= 0;
  },
};
</script>

<style lang="scss" scoped>
$gray: #ddd;
$border-radius: 4px;
.collapseItem {
  & > .title {
    border: 1px solid $gray;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    cursor: pointer;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    & > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    & > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      border-bottom: none;
    }
  }
  & > .content {
    padding: 8px 8px;
    transition: all 1s;
  }
}
</style>