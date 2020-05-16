<template>
    <button class="f-button" :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click')">
        <f-icon class="icon" v-if="icon && !loading" :name="icon"></f-icon>
        <f-icon class="loading icon" v-if="loading" name="loading"></f-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>

<script>
    // import Vue from 'vue'
    // Vue.component('g-icon',Icon)
    import Icon from './icon'

    export default {
        name:'fliButton',
        // props: ['icon', 'iconPosition']
        components: {
            'f-icon': Icon
        },
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    if (value !== 'left' && value !== 'right') {
                        window.alert('set左右显示比较好看')
                        return false
                    } else {
                        return true
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .f-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //解决inline引起上下不对齐的问题

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .2em;
        }


        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-left: .2em;
                margin-right: 0;
            }
        }

        .loading {
            animation: spin 2s infinite linear;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>