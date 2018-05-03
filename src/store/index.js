import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const global = {
    namespaced: true,
    state: {
        isAuth: false,
    },
    mutations: {
        setIsAuth(state, value) {
            state.isAuth = value;
        }
    }
};

const sidebar = {
    namespaced: true,
    state: {
        isActive: false,
    },
    mutations: {
        toggle(state) {
            state.isActive = !state.isActive;
        },
        hide(state) {
            state.isActive = false;
        },
        show(state) {
            state.isActive = true;
        }
    }
};

const store = new Vuex.Store({
    modules: { global, sidebar }
});

export default {
    store,
    install (Vue, options) {
        Vue.prototype.$store = store
    }
}