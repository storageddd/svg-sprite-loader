<template>
    <div class="row-item-block" :class="className">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "c-row-item-block",
        prop: ['class'],
        computed: {
            className() {
                return this.class;
            }
        }
    }
</script>