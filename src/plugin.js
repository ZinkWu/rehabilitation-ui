import Toast from './toast'

export default {
  install: function(Vue, options){
    Vue.prototype.$toast = function(propsData){
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData
      })
      vm.$mount()
      document.body.appendChild(vm.$el)
    }
  }
}