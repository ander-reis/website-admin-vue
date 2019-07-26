import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from "vue-resource";

import noticias from './noticias';
import categorias from './noticias-categorias'

Vue.use(Vuex);
Vue.use(VueResource);

/**
 * cria instância Vuex
 */
export default new Vuex.Store({
    modules: {
        noticias,
        categorias
    }
});
