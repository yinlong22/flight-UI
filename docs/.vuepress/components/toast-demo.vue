<template>
    <div>
        <f-button @click="showToast('top')">上方弹出</f-button>
        <f-button @click="showToast('middle')">中间弹出</f-button>
        <f-button @click="showToast('bottom')">下方弹出</f-button>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'
    import Vue from "vue";
    Vue.use(plugin)

    export default {
        components: {
            'f-button':Button,
        },
        methods: {
            showToast(position) {
                this.$toast('hello Toast', {
                    position,
                })
            }
        },
        data() {
            return {
                content: `
        methods: {
            showToast(position) {
                this.$toast('hello Toast', {
                    position,
                })
            }
        },
        <f-button @click="showToast('top')">上方弹出</f-button>
        <f-button @click="showToast('middle')">中间弹出</f-button>
        <f-button @click="showToast('bottom')">下方弹出</f-button>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
