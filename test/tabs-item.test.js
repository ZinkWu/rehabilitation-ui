const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsNav from '../src/tabs-nav'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPanels from '../src/tabs-panels'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component("r-tabs", Tabs)
Vue.component('r-tabs-nav', TabsNav)
Vue.component('r-tabs-item', TabsItem)
Vue.component('r-tabs-body', TabsBody)
Vue.component('r-tabs-panels', TabsPanels)

describe('tabs-item', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  it('props name', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test'
      }
    }).$mount()
    expect(vm.name).to.eq('test')
  })
  it('props disabled', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'test',
        disabled: true
      }
    }).$mount()

    expect(vm.$el.classList.contains('disabled')).to.eq(true)
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})