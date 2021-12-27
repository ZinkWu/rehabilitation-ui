const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function (){
    it('autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 0.5
        }
      }).$mount(div)
      vm.$on('beforeClose', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('autoCloseDelay', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoCloseDelay: 1
        }
      }).$mount(div)
      expect(document.body.contains(vm.$el)).to.eq(true)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })

    it('closeButton', () => {
      const callback = sinon.fake()
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: false,
          closeButton: true,
          closeButtonOptions: {
            content: "close",
            callback
          }
        }
      }).$mount(div)
      const closeEl = vm.$el.querySelector('.close')
      expect(closeEl.textContent.trim()).to.eq("close")
      closeEl.click()
      expect(callback).to.have.been.called
    })

    it('enableHTML', () => {
      const callback = sinon.fake()
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHTML: true,
          message: `<strong id="test">hi</strong>`
        }
      }).$mount(div)
      const strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })

    it('position', () => {
      const callback = sinon.fake()
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})