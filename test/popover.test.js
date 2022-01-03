const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })

  it('props position', (done) => {
    Vue.component('r-popover', Popover)
    const div = document.createElement('div')
    document.body.append(div)
    div.innerHTML = `
    <r-popover position="bottom" ref="container">
      <template slot="content">content test</template>
      <button>click</button>
    </r-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      const btn = vm.$el.querySelector('button')
      btn.click()
      vm.$nextTick(() => {
        const {contentContainer} = vm.$refs.container.$refs
        expect(contentContainer.classList.contains('position-bottom')).to.be.true
        done()
      })
    })
  })

  it('props trigger', (done) => {
    Vue.component('r-popover', Popover)
    const div = document.createElement('div')
    document.body.append(div)
    div.innerHTML = `
    <r-popover trigger="hover" ref="container">
      <template slot="content">content test</template>
      <button>click</button>
    </r-popover>
    `

    const vm = new Vue({
      el: div
    })
    let event = new Event('mouseenter')
    vm.$refs.container.$el.dispatchEvent(event)
    vm.$nextTick(() => {
      const {contentContainer} = vm.$refs.container.$refs
      expect(contentContainer).to.exist
      done()
    })
  })
})