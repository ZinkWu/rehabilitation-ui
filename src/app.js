import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('r-button', Button)
Vue.component('r-icon', Icon)
Vue.component('r-button-group', ButtonGroup)
Vue.component('r-input', Input)

new Vue({
  el: "#app",
  data() {
    return {
      loading: false
    }
  }
})