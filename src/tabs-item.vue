<template>
  <div class="tabs-item" @click="xxx" :class="itemClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ['eventBus'],
  data(){
    return {
      active: false
    }
  },
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  computed:{
    itemClasses(){
      return {
        active: this.active
      }
    }
  },
  created(){
    this.eventBus.$on('tabsItemClick', (name) => {
      console.log(name);
    })
  },
  methods: {
    xxx(){
      this.eventBus.$emit('tabsItemClick', this.name)
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-item {
  background: #ddd;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1em;
  margin-left: 1px;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  &.active{
    color: red;
  }
}
</style>