const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsNav from '../src/tabs/tabs-nav'
import TabsItem from '../src/tabs/tabs-item'
import TabsBody from '../src/tabs/tabs-body'
import TabsPanels from '../src/tabs/tabs-panels'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component("r-tabs", Tabs)
Vue.component('r-tabs-nav', TabsNav)
Vue.component('r-tabs-item', TabsItem)
Vue.component('r-tabs-body', TabsBody)
Vue.component('r-tabs-panels', TabsPanels)

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist

  })

  it("props selected", (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <r-tabs v-model="tabs">
        <r-tabs-nav>
          <r-tabs-item name="tab1">tab1</r-tabs-item>
          <r-tabs-item name="tab2">tab2</r-tabs-item>
          <r-tabs-item name="tab3">tab3</r-tabs-item>
        </r-tabs-nav>
        <r-tabs-body>
          <r-tabs-panels name="tab1">content 1</r-tabs-panels>
          <r-tabs-panels name="tab2">content 2</r-tabs-panels>
          <r-tabs-panels name="tab3">content 3</r-tabs-panels>
        </r-tabs-body>
      </r-tabs>
    `

    let vm = new Vue({
      el: div,
      data() {
        return {
          tabs: 'tab1'
        }
      }
    })
    vm.$nextTick(() => {
      const activeEl = vm.$el.querySelector(".active")
      expect(activeEl).to.exist
      done()
    })
  })

  // TODO
  it('props direction', () => {})
})