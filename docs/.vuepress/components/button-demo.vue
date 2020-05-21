<template>
    <div>
        <f-button disabled :loading="loading" @click="loading=!loading">按钮</f-button>
        <f-button :loading="loading" @click="loading=!loading" icon="set">按钮</f-button>
        <f-button :loading="loading" @click="loading=!loading" icon="set" icon-position="right">按钮</f-button>
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
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    if (value !== 'left' && value !== 'right') {
                        window.alert('set左右显示比较好看')
                        return false
                    } else {
                        return true
                    }
                }
            }
        }
    }
</script>