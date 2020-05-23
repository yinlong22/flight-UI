<template>
    <div>
        <f-collapse :selected.sync="selectedTab">
            <f-collapse-item title="水果" name="1">
                <img height="200"
                     src="./1.png">
            </f-collapse-item>
            <f-collapse-item title="蛋糕" name="2">
                <img height="200px"
                     src="./2.png">
            </f-collapse-item>
            <f-collapse-item title="哈士奇" name="3">
                <img height="200px"
                     src="./3.png">
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
                <img height="445"
                     src="./1.png">
            </f-collapse-item>
            <f-collapse-item title="蛋糕" name="2">
                <img height="300px"
                     src="./2.png">
            </f-collapse-item>
            <f-collapse-item title="哈士奇" name="3">
                <img height="440"
                     src="./3.png">
            </f-collapse-item>
        </f-collapse>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
