<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fliTabsHead',
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                vm.$el.getBoundingClientRect()
            })
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display: flex;
        height: $tab-height;
        justify-content: flex-start;
        position: relative;

        > .actions-wrapper {
            margin-left: auto;
        }

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom:10px solid $blue;
            width: 80px;
        }
    }

</style>