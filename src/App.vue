<template>
  <div id="app" v-pull-to-refresh>
    <c-sidebar v-if="isAuth"/>
    <main role="main">
      <c-header v-if="isAuth" v-on:click.native="hideSidebar"/>
      <router-view v-on:click.native="hideSidebar"/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        authUrl: '/api/post-success',
        logoutUrl: '/api/post-success'
      }
  },
  computed: {
    isAuth() {
      return this.$store.state.global.isAuth;
    }
  },
  methods: {
      hideSidebar() {
          this.$store.commit('sidebar/hide');
      },
      checkAuth() {
        this.axios.post(this.authUrl)
          .then(response => {
            //this.$store.commit('global/setIsAuth', response.data.isAuth);
          });
      },
      handleRouting() {
        if (this.$route.meta.requiresAuth && !this.isAuth) {
          this.$router.push({ path: '/auth'});
        }

        this.$router.beforeEach((to, from, next) => {
          if (to.meta.requiresAuth && !this.isAuth) {
            next({ path: '/auth'});
          } else if (to.path === '/auth' && this.isAuth) {
            next(false)
          } else if (to.path === '/logout') {
            this.axios.post(this.logoutUrl)
              .then(response => {
                this.$store.commit('global/setIsAuth', false);
                next({ path: '/auth'});
              });
          }
          else {
            next();
          }
        });
      }
  },
  mounted() {
    this.checkAuth();
    this.handleRouting();
  }
}
</script>

<style lang="scss">
  @import 'bootconf.scss';
  @import '~bootstrap/scss/bootstrap';

  #app {
    display: flex;
    overflow-x: hidden;
  }

  main {
    flex: 1;
  }

  @media (min-width: map-get($grid-breakpoints, md)) {
    .sidebar ~ * .bg-dark {
      background-color: #3d535e !important;
    }
  }
</style>