<template>
    <header class="header bg-dark">
        <div class="container">
            <div class="header__inner">
                <div class="header__menu text-inverse afake" @click.stop="toggleSidebar" v-if="!hasBackAction">
                    <c-icon name="menu"/>
                </div>
                <span v-on:click="goBack" class="header__back text-inverse afake" v-if="hasBackAction">
                    <c-icon name="arrow-back"/>
                </span>
                <h3 class="header__title text-inverse no-margin">{{ title }}</h3>
                <div class="header__action text-inverse" v-if="icon">
                    <c-icon :name="icon"/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'c-header',
        computed: {
            title() { return this.$route.meta.title },
            hasBackAction() { return this.$route.meta.hasBackAction },
            icon() { return this.$route.meta.icon },
        },
        methods: {
            toggleSidebar() {
                this.$store.commit('sidebar/toggle');
            },
            goBack () {
                if (window.history.length > 1) {
                    this.$router.go(-1);
                } else {
                    this.$router.push(this.$route.meta.defaultBackPath || this.$route.fullPath.match(/^(\/[A-z0-9]+)/)[0]);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../../bootconf.scss';

    .header {
        &__inner {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 15px;
        }

        &__back,
        &__menu {
            margin-right: 30px;
        }

        &__title {
            flex: 1;
        }
    }

    @media (min-width: map-get($grid-breakpoints, md)) {
        .header {
            &__menu {
                display: none;
            }
        }
    }
</style>