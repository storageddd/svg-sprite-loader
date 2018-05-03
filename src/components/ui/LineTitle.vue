<template>
    <div class="line-title bg-disabled bordered-bottom">
        <div class="container">
            <small class="text-uppercase text-muted"><slot/></small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "c-line-title"
    }
</script>

<style lang="scss">
    .line-title {
        padding-top: 8px;
        padding-bottom: 8px;
    }
</style>