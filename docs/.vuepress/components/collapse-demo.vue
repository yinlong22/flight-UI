<template>
    <div>
        <f-collapse :selected.sync="selectedTab">
            <f-collapse-item title="水果" name="1">
                <img height="300px"
                     src="https://camo.githubusercontent.com/34166ee79785af08bdff3d4a07cc8de31ba40cf8/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f352f32322f313732336238626633396233353836643f773d35303026683d34343526663d706e6726733d313035303331">
            </f-collapse-item>
            <f-collapse-item title="蛋糕" name="2">
                <img height="300px"
                     src="https://camo.githubusercontent.com/454499020672f4adb9ec636baec98f775e34256e/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f352f32322f313732336238636136616330336365643f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31">
            </f-collapse-item>
            <f-collapse-item title="哈士奇" name="3">
                <img height="300px"
                     src="https://camo.githubusercontent.com/8860754c7d7e53af94b79268a25870e57191e921/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f352f32322f313732336238663565323037326364383f773d34343026683d34343026663d706e6726733d323339343530">
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
                     src="https://camo.githubusercontent.com/34166ee79785af08bdff3d4a07cc8de31ba40cf8/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f352f32322f313732336238626633396233353836643f773d35303026683d34343526663d706e6726733d313035303331">
            </f-collapse-item>
            <f-collapse-item title="蛋糕" name="2">
                <img height="300px"
                     src="https://camo.githubusercontent.com/454499020672f4adb9ec636baec98f775e34256e/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f352f32322f313732336238636136616330336365643f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31">
            </f-collapse-item>
            <f-collapse-item title="哈士奇" name="3">
                <img height="300px"
                     src="https://camo.githubusercontent.com/8860754c7d7e53af94b79268a25870e57191e921/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323032302f352f32322f313732336238663565323037326364383f773d34343026683d34343026663d706e6726733d323339343530">
            </f-collapse-item>
        </f-collapse>
      `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>
