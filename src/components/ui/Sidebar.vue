<template>
    <aside class="sidebar bg-dark" :class="{ active: isActive }">
        <div class="sidebar__header">
            <router-link :to="{ name: 'AccountIndex' }" @click.native="close" class="sidebar__settings text-inverse float-right"><c-icon name="settings"></c-icon></router-link>
            <div class="sidebar__title text-inverse">
                <h3 class="no-margin text-truncate">{{fetchedData.userName}}</h3>
                <div class="small text-uppercase text-muted text-truncate">{{fetchedData.position}}</div>
            </div>
        </div>
        <ul class="sidebar__nav">
            <li class="sidebar__link" v-for="item in menu">
                <router-link :to="item.url" @click.native="close" class="text-inverse">
                    <c-icon :name="item.icon" class="sidebar__icon"></c-icon> <h4 class="no-margin d-inline-block">{{item.text}}</h4>
                </router-link>
                <b-badge v-if="item.badge" pill variant="success">{{item.badge}}</b-badge>
                <c-label v-if="item.label" variant="success"></c-label>
            </li>
        </ul>
        <div class="sidebar__footer bordered-top bordered-light">
            <div class="sidebar__link">
                <router-link :to="logout.url" @click.native="close" class="text-inverse">
                    <c-icon :name="logout.icon" class="sidebar__icon"></c-icon> <h4 class="no-margin d-inline-block">{{logout.text}}</h4>
                </router-link>
            </div>
        </div>
    </aside>
</template>

<script>
import modelHelper from '../../mixins/FetchHelper.js';

export default {
    name: 'c-sidebar',
    mixins: [modelHelper],
    data() {
        return {
            fetchUrl: '/api/global',
            pagiUrl: '/api/global',
            isLoadDisabled: false,
            fetchedData: [],
            logout: {
                url: '/logout',
                text: 'Выход',
                icon: 'exit'
            }
        }
    },
    computed: {
        menu() {
          return  [
            {
              url: '/account/balance',
              text: 'Баланс',
              icon: 'money',
              badge: `${this.fetchedData.balance}$`
            },
            {
              url: '/partners',
              text: 'Партнеры',
              icon: 'store'
            },
            {
              url: '/teams',
              text: 'Дистрибьюторская сеть',
              icon: 'network'
            },
            {
              url: '/license',
              text: 'Лицензии',
              icon: 'doc'
            },
            {
              url: '/news',
              text: 'Новости',
              icon: 'language',
              label: this.fetchedData.hasNews
            },
            {
              url: '/documents',
              text: 'База знаний',
              icon: 'info'
            }
          ]
        },
        isActive() {
            return this.$store.state.sidebar.isActive;
        }
    },
    methods: {
      close() {
          this.$store.commit('sidebar/hide', undefined);
      }
    }
}
</script>

<style lang="scss">
    @import '../../bootconf.scss';

    .sidebar {
        position: relative;
        flex: 0 0 240px;
        width: 240px;
        min-height: 100vh;
        margin-left: -240px;
        transition-property: background-color, margin;
        transition-duration: .3s;
        transition-timing-function: ease-in-out;
        background-color: $body-bg;

        &.active {
            margin-left: 0;

            ~ main {
                .bg-dark {
                    background-color: #3d535e !important;
                }

                .add-button {
                    right: -400px;
                }
            }
        }

        &__header,
        &__nav,
        &__footer {
            padding: 14px 15px;
        }

        &__nav {
            padding-bottom: 24px;
            margin-bottom: 0;
        }

        &__footer {
            padding-top: 24px;
        }

        &__settings {
            margin-top: 2px;
        }

        &__link {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__icon {
            margin-left: -4px;
            margin-right: 12px;
            opacity: .7;

            a:hover &,
            .router-link-active & {
                opacity: 1;
            }
        }

        &__link + &__link {
            margin-top: 20px;
        }
    }

    @media (min-width: map-get($grid-breakpoints, md)) {
        .sidebar {
            flex-basis: 280px;
            width: 280px;
            margin-left: 0;

            &__header,
            &__nav,
            &__footer {
                padding: 20px 30px;
            }
        }
    }
</style>