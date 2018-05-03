<template>
    <svg class="icon" :data-title="name">
        <use :xlink:href="nameHash"></use>
    </svg>
</template>

<script>
    export default {
        name: 'c-icon',
        props: ['name'],
        computed: {
            nameHash() {
                return '#' + this.name;
            }
        }
    }
</script>

<style lang="scss">
    .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        vertical-align: top;
        fill: currentColor;
        stroke: currentColor;

        &[data-title="logo"] {
            width: 118px;
            height: 86px;
            fill: #fff;
        }

        &[data-title="letter-a"] {
            width: 21px;
            height: 21px;
        }

        &[data-title="letter-b"] {
            width: 21px;
            height: 21px;
        }

        &[data-title="plus"] {
            width: 16px;
            height: 16px;
        }

        &[data-title="person"] {
            fill: #33D098;
        }

        &[data-title="people"] {
            opacity: .5;
        }
    }
</style>