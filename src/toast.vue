<template>
    <div class="toast">
        <slot></slot>
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
                default: 22
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.destroy()
            },
            log(){
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
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        height: $toast-height;
        line-height: $line-height;
        display: flex;
        color: honeydew;
        align-items: center;
        border-radius: 5px;
        padding: 0 16px;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    }

    .close {
        padding-left: 12px;

        &::before {
            content: '';
            top: 0;
            height: 100%;
            border-left: 0.1em solid honeydew;
            margin-right: 10px;
        }
    }
</style>