import Toast from './toast'

let currentToast;

export default {
  install: function (Vue, options) {
    Vue.prototype.$toast = function ({ propsData }) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(
        {
          Vue,
          propsData,
          onClose: () => { 
            currentToast = null
          }
        }
      )
    }
  }
}


function createToast({ Vue, propsData, onClose }) {
  const Constructor = Vue.extend(Toast)
  const vm = new Constructor({ propsData })
  vm.$mount()
  document.body.appendChild(vm.$el)
  vm.$on('beforeClose', onClose)
  return vm;
}