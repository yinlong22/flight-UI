<template>
    <div>
        <f-button @click="showToast('top')">上方弹出</f-button>
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
                this.$toast('你知道我一直在等你吗', {
                    position,
                    closeButton: {
                        text: '知道啦',
                    },
                })
            }
        },
        data() {
            return {
                content: `
        methods: {
            showToast(position) {
                this.$toast('你知道我一直在等你吗', {
                    position,
                    closeButton: {
                        text: '知道啦',
                    },
                })
            }
        },
        <f-button @click="showToast('top')">上方弹出</f-button>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
