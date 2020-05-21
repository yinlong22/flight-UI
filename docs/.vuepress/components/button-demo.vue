<template>
    <div>
        <f-button>默认按钮</f-button>
        <f-button icon="set">默认按钮</f-button>
        <f-button :loading="true">默认按钮</f-button>
        <f-button disabled>默认按钮</f-button>

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