<template>
    <div>
        <f-popover>
            <f-button>上方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="bottom">
            <f-button>下方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="left">
            <f-button>左边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="right">
            <f-button>右边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>

        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>

        <br>
        <h3>将触发方式改为 hover</h3>
        <hr>
        <h4>预览</h4>
        <f-popover trigger="hover">
            <f-button>上方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="bottom" trigger="hover">
            <f-button>下方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="left" trigger="hover">
            <f-button>左边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="right" trigger="hover">
            <f-button>右边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <h4>代码</h4>
        <pre><code>{{content1}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/popover'
    export default {
        components: {
            'f-button': Button,
            'f-popover': Popover
        },
        data() {
            return {
                content: `
        <f-popover>
            <f-button>上方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="bottom">
            <f-button>下方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="left">
            <f-button>左边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="right">
            <f-button>右边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
      `.replace(/\s{2,}/, '').trim(),
                content1:`
                <f-popover trigger="hover">
            <f-button>上方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="bottom" trigger="hover">
            <f-button>下方弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="left" trigger="hover">
            <f-button>左边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
        <f-popover position="right" trigger="hover">
            <f-button>右边弹出</f-button>
            <template slot="content">
                弹出内容
            </template>
        </f-popover>
                `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
