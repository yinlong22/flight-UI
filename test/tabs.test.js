const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('f-tabs', Tabs)
Vue.component('f-tabs-head', TabsHead)
Vue.component('f-tabs-body', TabsBody)
Vue.component('f-tabs-item', TabsItem)
Vue.component('f-tabs-pane', TabsPane)

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
          <f-tabs-item name="sport"> 体育 </f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
          <f-tabs-pane name="woman"> 美女相关资讯 </f-tabs-pane>
          <f-tabs-pane name="finance"> 财经相关资讯 </f-tabs-pane>
          <f-tabs-pane name="sport"> 体育相关资讯 </f-tabs-pane>
        </f-tabs-body>
      </f-tabs>
    `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

    // it('可以接受 direction prop', () => {
    //
    // })

})