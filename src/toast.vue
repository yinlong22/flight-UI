<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'fliToast',
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 8,
                validator(value) {
                    return value === false || typeof value === 'number';
                }
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
                    }, this.autoClose * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                // this.destroy()
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
    $animation-duration: .5s;
    @keyframes slideUp {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes slideDown {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;
            z-index: 30;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slideDown $animation-duration;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slideUp $animation-duration;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

            .toast {
                animation: fade-in $animation-duration;
            }
        }
    }

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: $line-height;
        display: flex;
        color: snow;
        align-items: center;
        border-radius: 5px;
        padding: 0 16px;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        .close {
            padding-left: 15px;
            flex-shrink: 0;
            cursor: pointer;
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
    }
</style>