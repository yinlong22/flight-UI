<template>
    <div>
        <f-collapse :selected.sync="selectedTab">
            <f-collapse-item title="水果" name="1">
                <img height="300px"
                     src="https://user-gold-cdn.xitu.io/2020/5/22/1723b8bf39b3586d?w=500&h=445&f=png&s=105031">
            </f-collapse-item>
            <f-collapse-item title="蛋糕" name="2">
                <img height="300px"
                     src="https://user-gold-cdn.xitu.io/2020/5/22/1723b8ca6ac03ced?w=1000&h=667&f=png&s=1062604">
            </f-collapse-item>
            <f-collapse-item title="哈士奇" name="3">
                <img height="300px"
                     src="https://user-gold-cdn.xitu.io/2020/5/22/1723b8f5e2072cd8?w=440&h=440&f=png&s=239450">
            </f-collapse-item>
        </f-collapse>

        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'

    export default {
        components: {
            'f-collapse': Collapse,
            'f-collapse-item': CollapseItem
        },
        data() {
            return {
                selectedTab: ['2'],
                content: `
            data() {selectedTab: ['2']
            // selectedTab: ['1','2']
            }
            <f-collapse :selected.sync="selectedTab">
            <f-collapse-item title="水果" name="1">
                <img height="300px"
                     src="https://user-gold-cdn.xitu.io/2020/5/22/1723b8bf39b3586d?w=500&h=445&f=png&s=105031">
            </f-collapse-item>
            <f-collapse-item title="蛋糕" name="2">
                <img height="300px"
                     src="https://user-gold-cdn.xitu.io/2020/5/22/1723b8ca6ac03ced?w=1000&h=667&f=png&s=1062604">
            </f-collapse-item>
            <f-collapse-item title="哈士奇" name="3">
                <img height="300px"
                     src="https://user-gold-cdn.xitu.io/2020/5/22/1723b8f5e2072cd8?w=440&h=440&f=png&s=239450">
            </f-collapse-item>
        </f-collapse>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
