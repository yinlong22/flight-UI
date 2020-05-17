import {describe} from "mocha";

const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    //BDD 行为测试

    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm = new Constructor({
            propsData: {
                value: '1234',
                disabled: true,
                readonly: true,
                error: '你错了',
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        afterEach(() => {
            vm.$destroy()
        })
        it('接収 value', () => {
            expect(inputElement.value).to.equal('1234')
        })

        it('接收 disabled', () => {
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收 readonly', () => {
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收 error', () => {
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur']
                .forEach((eventName) => {
                    vm.$on(eventName, callback)
                    //触发 input 的 change 事件
                    let event = new Event(eventName)
                    Object.defineProperty(
                        event, 'target', {
                            value: {value: 'hello'}, enumerable: true
                        }
                    )
                    let inputElement = vm.$el.querySelector('input')
                    inputElement.dispatchEvent(event)
                    expect(callback).to.have.been.calledWith('hello')
                    //测试 change 事件有几个参数
                    vm.$destroy()
                })
        })
    })
})