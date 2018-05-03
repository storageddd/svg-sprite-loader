<template>
  <section class="welcome">
    <div class="welcome__content">
     <b-container>
       <h1>{{fetchedData.userName}}, <br>Здравствуйте!</h1>
       <p>Для начала работы пройдите аккредитацию до {{fetchedData.accreditationDate}}.</p>
       <router-link to="/">
         <b-button variant="primary">Подробнее</b-button>
       </router-link>
     </b-container>
    </div>
    <div class="welcome__footer">
      <b-container>
        Есть вопросы?<br>
        Пишите на <a href="mailto:info@bonpass.ru">info@bonpass.ru</a>
      </b-container>
    </div>
  </section>
</template>

<script>
import modelHelper from '../../../mixins/FetchHelper.js';

export default {
  name: 'welcome',
  mixins: [modelHelper],
  data () {
    return {
      fetchUrl: '/api/auth/welcome',
      isLoadDisabled: false,
      fetchedData: []
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
  @import '../../../bootconf';

  .welcome {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 100%;
    height: calc(100vh - 58px);
    padding-top: 15px;
    padding-bottom: 40px;

    &__footer {
      margin-top: 40px;
    }
  }

  @media (min-width: map-get($grid-breakpoints, md)) {
    .welcome {
      .container {
        padding-top: 40px;
        padding-bottom: 50px;
      }
    }
  }
</style>