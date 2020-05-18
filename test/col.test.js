const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 iPad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                iPad: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-iPad-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-iPad-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-narrowPc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrowPc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 widePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-widePc-1')).to.eq(true)
        expect(vm.$el.classList.contains('offset-widePc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })

})