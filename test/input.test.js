const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm = null;
    afterEach(() => {
      vm.$destroy()
    })

    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '123'
        }
      }).$mount()
      const inputEl = vm.$el.querySelector('input')
      expect(inputEl.value).to.equal('123')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputEl = vm.$el.querySelector('input')
      expect(inputEl.disabled).to.equal(true)
    })

    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputEl = vm.$el.querySelector('input')
      expect(inputEl.readOnly).to.equal(true)
    })

    it('接收 errorMessage', () => {
      vm = new Constructor({
        propsData: {
          errorMessage: "test"
        }
      }).$mount()
      const useEl = vm.$el.querySelector('use')
      expect(useEl.getAttribute('xlink:href')).to.equal('#i-error')
      const spanEl = vm.$el.querySelector('span')
      expect(spanEl.innerText).to.equal("test")
    })
  })

  describe('event', () => {
    const Constructor = Vue.extend(Input)
    let vm = null;
    afterEach(() => {
      vm.$destroy()
    })

    it('change/input/focus/blur event', () => {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor().$mount()
        const callback = sinon.fake();
        vm.$on(eventName, callback)
        let inputEl = vm.$el.querySelector('input')
        let evnet = new Event(eventName)
        Object.defineProperty(evnet, 'target', {
          value: { value: 'test' }, enumerable: true
        })
        inputEl.dispatchEvent(evnet)
        if(eventName === 'focus' || eventName === 'blur'){
          expect(callback).to.have.been.called
        }else{
          expect(callback).to.have.been.calledWith('test')
        }
      })
    })
  })
})