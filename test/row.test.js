const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
  })

  it('data: gutter', (done) => {
    Vue.component('r-row', Row)
    Vue.component('r-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <r-row gutter="20">
        <r-col span="12"></r-col>
        <r-col span="12"></r-col>
      </r-row>
    `

    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const rowEl = vm.$el.querySelector('.row')
      expect(getComputedStyle(rowEl).marginLeft).to.equal('-10px')
      expect(getComputedStyle(rowEl).marginRight).to.equal('-10px')
      const colEls = vm.$el.querySelectorAll(".col")
      expect(getComputedStyle(colEls[0]).paddingLeft).to.equal("10px")
      expect(getComputedStyle(colEls[1]).paddingRight).to.equal("10px")
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 0)
  })

  it('props: align', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const rowEl = vm.$el
    expect(getComputedStyle(rowEl).justifyContent).to.equal('flex-end')
    rowEl.remove()
    vm.$destroy()
  })
})