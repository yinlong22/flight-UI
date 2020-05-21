<f-tabs :selected.sync="selectedTabs">
    <f-tabs-head>
        <template slot="actions">
            <button>设置</button>
        </template>
        <f-tabs-item name="woman" disabled>
            <f-icon name="set"></f-icon>
            美女
        </f-tabs-item>
        <f-tabs-item name="finance">
            财经
        </f-tabs-item>
        <f-tabs-item name="sport">
            体育
        </f-tabs-item>
    </f-tabs-head>
    <f-tabs-body>
        <f-tabs-pane name="woman">
            美女相关资讯
        </f-tabs-pane>
        <f-tabs-pane name="finance">
            财经相关资讯
        </f-tabs-pane>
        <f-tabs-pane name="sport">
            体育相关资讯
        </f-tabs-pane>
    </f-tabs-body>
</f-tabs>
<script>
    import Tabs from "../../../src/tabs";
    import TabsHead from "../../../src/tabs-head";
    import TabsBody from "../../../src/tabs-body";
    import TabsItem from "../../../src/tabs-item";
    import TabsPane from "../../../src/tabs-pane";
    import Vue from "vue";
    Vue.component('f-tabs', Tabs)
    Vue.component('f-tabs-head', TabsHead)
    Vue.component('f-tabs-body', TabsBody)
    Vue.component('f-tabs-item', TabsItem)
    Vue.component('f-tabs-pane', TabsPane)

    export default {
        components: {
            'f-button': Button
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