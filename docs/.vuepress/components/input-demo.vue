<template>
    <div>
        <f-input value="张三"></f-input>
        <f-input value="李四" :disabled="true"></f-input>
        <f-input value="王五" readonly></f-input>
        <f-input value="王" error="姓名不能少于两个字"></f-input>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
        <br>
        <h3>双向绑定</h3>
        <hr>
        <h4>预览</h4>
            <f-input value="王" v-model="message"></f-input>
            <p>message: {{message}}</p>
        <h4>代码</h4>
        <pre><code>{{content1}}</code></pre>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'f-input': Input,
        },
        data() {
            return {
                message: 'hello',
                content: `
        <f-input value="张三"></f-input>
        <f-input value="李四" :disabled="true"></f-input>
        <f-input value="王五" readonly></f-input>
        <f-input value="王" error="姓名不能少于两个字"></f-input>

      `.replace(/\t+| +/g, '').trim(),
                content1:`
        data(){message: 'hello'}
        <p>
            <f-input value="王" v-model="message"></f-input>{{message}}
        </p>
                `.replace(/\s{2,}/, '').trim()
            }
        },
    }
</script>