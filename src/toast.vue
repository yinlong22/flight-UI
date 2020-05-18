<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'fliToast',
        props:{
            autoClose:{
                type:Boolean,
                default:true
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
</style>