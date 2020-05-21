<template>
    <button class="f-button" :disabled="disabled" :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click')">
        <f-icon class="icon" v-if="icon && !loading" :name="icon"></f-icon>
        <f-icon class="loading icon" v-if="loading" name="loading"></f-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    // import Vue from 'vue'
    // Vue.component('g-icon',Icon)
    import Icon from './icon'

    export default {
        name: 'fliButton',
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
            disabled: {
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
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 5px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    .f-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //解决inline引起上下不对齐的问题

        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        > .f-button-content {
            order: 2;
        }

        > .icon {
            margin-right: .2em;
            justify-content: center;
        }


        &.icon-right {
            > .f-button-content {
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
        &[disabled]{
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
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