<template>
    <div :class="className"></div>
</template>

<script>
    export default {
        name: 'c-label',
        props: ['variant'],
        computed: {
            className() {
                let className = 'label';

                if (this.variant) {
                    className += ' label--' + this.variant;
                }

                return className;
            }
        }
    }
</script>

<style lang="scss">
    @import '../../bootconf.scss';

    .label {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;

        &--success {
            background-color: $success;
        }
    }
</style>