<template>
    <div class="row-item-flex" :data-align="alignV">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "c-row-item-flex",
        props: ['align-v']
    }
</script>