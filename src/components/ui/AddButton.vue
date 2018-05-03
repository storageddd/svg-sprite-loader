<template>
    <b-button variant="danger" class="add-button">
        <c-icon name="plus"/>
    </b-button>
</template>

<script>
    export default {
        name: "c-add-button"
    }
</script>

<style lang="scss">
    @import '../../bootconf.scss';

    .add-button {
        position: fixed;
        width: 56px;
        height: 56px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        line-height: 17px;
        transition-property: color, background-color, right;
    }

    @media (min-width: map-get($grid-breakpoints, md)) {
        .add-button {
            right: 40px;
            bottom: 40px;
        }
    }
</style>