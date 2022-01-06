<template>
  <div class="collapseItem">
    <div class="title" @click="fold = !fold">
      {{ title }}
    </div>
    <div class="content" v-if="fold">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fold: false,
    };
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
  }
}
</style>