import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import plugin from './plugin'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-button-group', ButtonGroup)
Vue.component('r-input', Input)
Vue.component('r-row', Row)
Vue.component('r-col', Col)
Vue.component('r-layout', Layout)
Vue.component('r-header', Header)
Vue.component('r-sider', Sider)
Vue.component('r-content', Content)
Vue.component('r-footer', Footer)
Vue.use(plugin)

new Vue({
  el: "#app",
  data() {
    return {}
  },
  created() {
  },
  methods: {
    showToast() {
      this.$toast({
        propsData: {
          // message: `很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多， 完`,
          message: 'this is message',
          // enableHTML: true,
          autoCloseDelay: 300,
          closeButton: true,
          position: "bottom"
          // closeButtonOptions: {
          //   content: 'ok',
          //   callback(vm){
          //     console.log("ok!!!!!!!!!!!");
          //     vm.log()
          //   }
          // }
        }
      })
    }
  }
})