<template>
  <div class="container">
    <r-button @click="autoClose">click me</r-button>
    <r-button @click="top">top</r-button>
    <r-button @click="middle">middle</r-button>
    <r-button @click="manualClose">自定义关闭按钮</r-button>
  </div>
</template>

<script>
import Vue from 'vue';
import plugin from '../../../src/plugin';
import Button from '../../../src/button.vue';
Vue.use(plugin)
export default {
  components:{
    'r-button': Button
  },
   methods: {
    manualClose(){
      this.$toast({
        propsData: {
          message: '我可以自定义关闭按钮',
          position: 'top',
          autoClose: false,
          closeButton: true,
          closeButtonOptions: {
            content: 'close',
            callback: function(){
              alert('callback called')
            }
          }
        }
      })
    },
    autoClose() {
      this.$toast({
        propsData: {
          message: 'toast content'
        }
      })
    },
    top(){
      this.$toast({
        propsData: {
          message: 'toast content',
          position: 'top'
        }
      })
    },
    middle(){
      this.$toast({
        propsData: {
          message: 'toast content',
          position: 'middle'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.r-button{
  margin-right: 1em;
}
</style>