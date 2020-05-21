<template>
    <div>
        <f-input value="张三"></f-input>
        <f-input value="李四" :disabled="true"></f-input>
        <f-input value="王五" readonly></f-input>
        <f-input value="王" error="姓名不能少于两个字"></f-input>
        <p>
        <f-input value="王" v-model="message"></f-input> : {{message}}
        </p>
    <pre><code>{{content}}</code></pre>
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
        message: 'hello',
        <f-input value="张三"></f-input>
        <f-input value="李四" :disabled="true"></f-input>
        <f-input value="王五" readonly></f-input>
        <f-input value="王" error="姓名不能少于两个字"></f-input>
        <p>
        <f-input value="王" v-model="message"></f-input>{{message}}
        </p>
      `
            }
        },
    }
</script>