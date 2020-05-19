<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
    export default {
        name: 'fliToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 9
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.execAutoClose()
            this.updateStyles()
        },
        computed: {
            toastClasses() {
                return {[`position-${this.position}`]: true}
            }
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.destroy()
            },
            log() {
                console.log('test');
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton
                    .callback === 'function') {
                    this.closeButton.callback(this)//this===toast 实例

                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 16px;
    $line-height: 1.8;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        left: 50%;
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: $line-height;
        display: flex;
        color: honeydew;
        align-items: center;
        border-radius: 5px;
        padding: 0 16px;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);

        .close {
            padding-left: 15px;
            flex-shrink: 0;
        }

        .line {
            top: 0;
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }

        .message {
            padding: 8px 0;
        }

        &.position-top {
            transform: translateX(-50%);
            top: 0;
        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);

        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%,-50%);

        }
    }
</style>