import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Footer from './layout/footer'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsNav from './tabs/tabs-nav'
import TabsItem from './tabs/tabs-item'
import TabsBody from './tabs/tabs-body'
import TabsPanels from './tabs/tabs-panels'
import Popover from './popover'
import Collapse from './collapse/collapse';
import CollapseItem from './collapse/collapse-item';

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
Vue.component('r-tabs', Tabs)
Vue.component('r-tabs-nav', TabsNav)
Vue.component('r-tabs-item', TabsItem)
Vue.component('r-tabs-body', TabsBody)
Vue.component('r-tabs-panels', TabsPanels)
Vue.component('r-popover', Popover)
Vue.component('r-collapse', Collapse)
Vue.component('r-collapse-item', CollapseItem)

let app = new Vue({
  el: "#app",
  data() {
    return {
      selectedTab: 'tab3',
      active: ["1"]
    }
  },
  created() {
  },
  methods: {
    f(){
      console.log(123)
    },
    showToast() {
      this.$toast({
        propsData: {
          // message: `很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多， 完`,
          message: 'this is message',
          // enableHTML: true,
          autoCloseDelay: 300,
          closeButton: true,
          position: "bottom",
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