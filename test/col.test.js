const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Col)
    let vm = null;
    afterEach(() => {
      vm.$destroy()
    })

    it('span', () => {
      vm = new Constructor({
        propsData: {
          span: 1,
          offset: 1,
          pad: {
            span: 1,
            offset: 1
          },
          narrowPc: {
            span: 1,
            offset: 1
          },
          pc: {
            span: 1,
            offset: 1
          },
          widePc: {
            span: 1,
            offset: 1
          }
        }
      }).$mount()
      const element = vm.$el
      const classList = element.classList
      const targets = [null, 'pad', 'narrowPc', 'pc', 'widePc']
      targets.forEach((item) => {
        expect(classList.contains((item ? `${item}-` : "") + 'col-1')).to.equal(true)
        expect(classList.contains((item ? `${item}-` : "") + 'offset-1')).to.equal(true)
      })
    })
  })
})