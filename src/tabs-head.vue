<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>
<script>
    export default {
        name:'fliTabsHead',
        inject: ['eventBus'],
        created() {
            console.log('爷爷给爸爸的 eventBus');
            console.log(this.eventBus);
        }
    }
</script>
<style>
    .tabs-head{

    }
</style>