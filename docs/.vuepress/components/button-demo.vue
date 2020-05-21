<template>
    <div>
        <f-button disabled :loading="loading1" @click="loading1=!loading1">按钮</f-button>
        <f-button :loading="loading2" @click="loading2=!loading2" icon="set">按钮</f-button>
        <f-button :loading="loading3" @click="loading3=!loading3" icon="set" icon-position="right">按钮</f-button>
        <f-button-group>
            <f-button icon="left">上一页</f-button>
            <f-button>更多</f-button>
            <f-button icon="right" icon-position="right">下一页</f-button>
        </f-button-group>

        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
        components: {
            'f-button': Button
        },
        data () {
            return {
                content: `
          <f-button>默认按钮</f-button>
          <f-button icon="set">默认按钮</f-button>
          <f-button :loading="true">默认按钮</f-button>
          <f-button disabled>默认按钮</f-button>
      `.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>