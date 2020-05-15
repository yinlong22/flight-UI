import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

//注册
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
})