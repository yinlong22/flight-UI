<template>
    <div>
    <f-tabs :selected.sync="selectedTabs">
        <f-tabs-head>
            <template slot="actions">
                <f-button>设置</f-button>
            </template>
            <f-tabs-item name="woman" disabled>
                woman
            </f-tabs-item>
            <f-tabs-item name="finance">
                finance
            </f-tabs-item>
            <f-tabs-item name="sport">
                sports
            </f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
            <f-tabs-pane name="woman">
                女性相关资讯
            </f-tabs-pane>
            <f-tabs-pane name="finance">
                财经相关资讯
            </f-tabs-pane>
            <f-tabs-pane name="sport">
                体育相关资讯
            </f-tabs-pane>
        </f-tabs-body>
    </f-tabs>
        <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>

    import Tabs from "../../../src/tabs";
    import TabsHead from "../../../src/tabs-head";
    import TabsBody from "../../../src/tabs-body";
    import TabsItem from "../../../src/tabs-item";
    import TabsPane from "../../../src/tabs-pane";
    import Button from "../../../src/button";

    export default {
        components: {
            'f-tabs': Tabs,
            'f-tabs-head': TabsHead,
            'f-tabs-body': TabsBody,
            'f-tabs-item': TabsItem,
            'f-tabs-pane': TabsPane,
            'f-button':Button
        },
        data() {
            return {
                selectedTabs: 'sport',
                content: `
data(){selectedTabs: 'sport'}
<f-tabs :selected.sync="selectedTabs">
        <f-tabs-head>
            <template slot="actions">
                <button>设置</button>
            </template>
            <f-tabs-item name="woman" disabled>
                woman
            </f-tabs-item>
            <f-tabs-item name="finance">
                finance
            </f-tabs-item>
            <f-tabs-item name="sport">
                sports
            </f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
            <f-tabs-pane name="woman">
                女性相关资讯
            </f-tabs-pane>
            <f-tabs-pane name="finance">
                财经相关资讯
            </f-tabs-pane>
            <f-tabs-pane name="sport">
                体育相关资讯
            </f-tabs-pane>
        </f-tabs-body>
    </f-tabs>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>