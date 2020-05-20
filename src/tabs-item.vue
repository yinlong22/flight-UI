<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'filTabsItem',
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: String | Number,
                required: true
            },
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            console.log('爷爷给孙子的 eventBus');
            console.log(this.eventBus);
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $tab-height: 32px;
    .tabs-item {
        padding: 0 1.5em;
        flex-shrink: 0;
        height: $tab-height;
        cursor: pointer;
        align-items: center;
        display: flex;
        border: 1px solid darkseagreen;

        &.active {
            background: red;
        }
    }
</style>