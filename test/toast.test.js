const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    it('autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          message: "test",
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
          message: "test",
          autoCloseDelay: 1
        }
      }).$mount(div)
      expect(document.body.contains(vm.$el)).to.eq(true)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })

    it('closeButton', (done) => {
      const callback = sinon.fake()
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          message: "test",
          autoClose: false,
          closeButton: true,
          closeButtonOptions: {
            content: "test",
            callback
          }
        }
      }).$mount(div)
      const closeEl = vm.$el.querySelector('.close')
      expect(closeEl.textContent.trim()).to.eq("test")
      setTimeout(() => {
        // 这里如果同步执行代码，mounted hook中的代码还未执行完毕就已经执行到 click 关闭 toast
        // element 已经删除，造成 resetLineHeight 中的代码报错
        closeEl.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })

    it('enableHTML', () => {
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
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          message: "test",
          position: 'bottom'
        }
      }).$mount(div)
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})