import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'

//注册
Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)
Vue.component('f-input',Input)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})


//单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
//
// chai.use(spies)
//
// const expect = chai.expect
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'set'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-set')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'set',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'set',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'set',
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function () {})
//     vm.$on('click', spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }