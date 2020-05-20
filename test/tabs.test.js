const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <f-tabs selected="finance">
        <f-tabs-head>
          <f-tabs-item name="woman"> 美女 </f-tabs-item>
          <f-tabs-item name="finance"> 财经 </f-tabs-item>
          <f-tabs-item name="sports"> 体育 </f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
          <f-tabs-pane name="woman"> 美女相关资讯 </f-tabs-pane>
          <f-tabs-pane name="finance"> 财经相关资讯 </f-tabs-pane>
          <f-tabs-pane name="sports"> 体育相关资讯 </f-tabs-pane>
        </f-tabs-body>
      </f-tabs>
    `
        let vm = new Vue({
            el: div
        })
        setTimeout(() => {
            console.log(vm.$el.outerHTML);
            // let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            // expect(x.classList.contains('active')).to.be.true
            done()
        },1000)
    })

    it('可以接受 direction prop', () => {

    })

})