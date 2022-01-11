const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse/collapse'
import CollapseItem from "../src/collapse/collapse-item";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.exist
    })

    it('props activeName', (done) => {
        Vue.component('r-collapse', Collapse)
        Vue.component('r-collapse-item', CollapseItem)
        const div = document.createElement('div');
        document.body.appendChild(div)
        div.innerHTML = `
            <r-collapse v-model="activeName">
                <r-collapse-item title="标题1" name="1"><span class="content-1">内容1</span></r-collapse-item>
                <r-collapse-item title="标题2" name="2"><span class="content-2">内容2</span></r-collapse-item>
                <r-collapse-item title="标题3" name="3"><span class="content-3">内容3</span></r-collapse-item>
            </r-collapse>
        `

        const vm = new Vue({
            el: div,
            data: {
                activeName: ['1', '2']
            }
        })

        setTimeout(() => {
            expect(vm.$el.querySelector('.content-1')).to.exist
            expect(vm.$el.querySelector('.content-2')).to.exist
            expect(vm.$el.querySelector('.content-3')).to.not.exist
            done()
        }, 1000)
    })

    it('props accordion', (done) => {
        Vue.component('r-collapse', Collapse)
        Vue.component('r-collapse-item', CollapseItem)
        const div = document.createElement('div');
        document.body.appendChild(div)
        div.innerHTML = `
            <r-collapse v-model="activeName" accordion>
                <r-collapse-item title="标题1" name="1"><span class="content-1">内容1</span></r-collapse-item>
                <r-collapse-item title="标题2" name="2"><span class="content-2">内容2</span></r-collapse-item>
                <r-collapse-item title="标题3" name="3"><span class="content-3">内容3</span></r-collapse-item>
            </r-collapse>
        `

        const vm = new Vue({
            el: div,
            data: {
                activeName: ['1']
            }
        })
        setTimeout(() => {
            const elList = vm.$el.querySelectorAll('.title')
            expect(vm.$el.querySelector('.content-1')).to.exist
            elList[1].click()
            setTimeout(() => {
                expect(vm.$el.querySelector('.content-1')).to.not.exist
                expect(vm.$el.querySelector('.content-2')).to.exist
                expect(vm.$el.querySelector('.content-3')).to.not.exist
                done()
            })
        })
    })

    it('v-model', () => {
        Vue.component('r-collapse', Collapse)
        Vue.component('r-collapse-item', CollapseItem)
        const div = document.createElement('div');
        document.body.appendChild(div)
        div.innerHTML = `
            <r-collapse v-model="activeName" accordion>
                <r-collapse-item title="标题1" name="1"><span class="content-1">内容1</span></r-collapse-item>
                <r-collapse-item title="标题2" name="2"><span class="content-2">内容2</span></r-collapse-item>
                <r-collapse-item title="标题3" name="3"><span class="content-3">内容3</span></r-collapse-item>
            </r-collapse>
        `
        let activeName = ['1', '2']

        const vm = new Vue({
            el: div,
            data: {
                activeName
            }
        })

        const elList = vm.$el.querySelectorAll('.title')
        elList[0].click()
        expect(activeName.length).to.eq(1)
        expect(activeName).to.deep.eq(['2'])
    })
})