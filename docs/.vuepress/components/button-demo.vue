<template>
    <div>
        <f-button disabled>按钮</f-button>
        <f-button :loading="loading1" @click="loading1=!loading1" icon="set">按钮</f-button>
        <f-button :loading="loading2" @click="loading2=!loading2" icon="set" icon-position="right">按钮</f-button>
        <f-button-group>
            <f-button icon="left">上一页</f-button>
            <f-button>更多</f-button>
            <f-button icon="right" icon-position="right">下一页</f-button>
        </f-button-group>

        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components: {
            'f-button': Button,
            'f-button-group': ButtonGroup
        },
        data() {
            return {
                loading1: true,
                loading2: false,
                content: `
        data(){loading1: true,loading2: false}
        <f-button disabled :loading="loading1" @click="loading1=!loading1">按钮</f-button>
        <f-button :loading="loading2" @click="loading2=!loading2" icon="set">按钮</f-button>
        <f-button :loading="loading3" @click="loading3=!loading3" icon="set" icon-position="right">按钮</f-button>
        <f-button-group>
            <f-button icon="left">上一页</f-button>
            <f-button>更多</f-button>
            <f-button icon="right" icon-position="right">下一页</f-button>
        </f-button-group>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
