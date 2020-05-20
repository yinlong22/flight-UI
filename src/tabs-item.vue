<template>
    <div class="tabs-item" @click="onClick" :data-name="name" :class="classes">
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
                type: [String, Number],
                required: true
            },
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            if (this.eventBus) {
                this.eventBus.$on('update:selected', (name) => {
                    this.active = name === this.name;
                })
            }
        },
        methods: {
            onClick() {
                if (this.disabled) {return}
                this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click',this)
            }
        }
    }
</script>
<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        padding: 0 1.5em;
        flex-shrink: 0;
        height: 100%;
        cursor: pointer;
        align-items: center;
        display: flex;

        &.active {
            color: $blue;
            font-weight: bold;
        }

        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>