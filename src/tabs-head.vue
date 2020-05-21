<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fliTabsHead',
        inject: ['eventBus'],
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        border-bottom: 1px solid $border-color;

        > .actions-wrapper{
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
        }
    }

</style>