<template>
  <section class="sign-in bg-dark">
    <div class="sign-in__inner text-center">
      <div class="sign-in__logo">
        <c-icon name="logo"></c-icon>
      </div>
      <b-form @submit.prevent="submitForm" class="sign-in__form">
        <b-form-group id="email-group"
                      label-for="email"
                      :state="undefined">
          <b-form-input id="email"
                        placeholder="Электронная почта"
                        required
                        type="email"
                        v-model.trim="form.email"></b-form-input>
        </b-form-group>
        <b-form-group id="password-group"
                      label-for="passsword"
                      :state="undefined">
          <b-form-input id="password"
                        placeholder="Пароль"
                        required
                        type="password"
                        v-model.trim="form.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Войти</b-button>
      </b-form>
      <div class="sign-in__footer">
        <router-link to="/">Забыли пароль?</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sign-in',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      requestUrl: '/api/post-success'
    }
  },
  methods: {
    setIsAuth() {
        this.$store.commit('global/setIsAuth', true);
        this.$router.push('account/balance');
    },
    submitForm() {
      let url = this.requestUrl;
      this.axios.post(url, this.form)
        .then(response => {
          this.setIsAuth();
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
      this.$store.commit('global/setIsAuth', false);
  }
}
</script>

<style lang="scss">
  @import '../../../bootconf';

  .sign-in {
    display: flex;
    height: 100vh;
    padding-top: 40px;
    padding-bottom: 40px;

    &__inner {
      width: 248px;
      margin: auto;
    }

    &__logo {
      margin-bottom: 93px;
    }

    &__form {
      .form-control {
        color: $body-bg;
        border-bottom-color: rgba(255, 255, 255, 0.12);

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        &:focus,
        &:active {
          border-bottom-color: #757575;
        }
      }

      .btn {
        margin-top: 60px;
        min-width: 114px;
      }
    }

    &__footer {
      margin-top: 40px;
    }
  }
</style>