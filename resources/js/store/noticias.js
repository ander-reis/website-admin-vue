import 'vue-resource';
import Vue from 'vue';
import ADMIN_CONFIG from '../services/admin.config';

const state = {
    noticias: []
};

const mutations = {
    set(state, noticias){
        state.noticias = noticias;
    }
};

const actions = {
    query(context, noticias){
        Vue.http.get(`${ADMIN_CONFIG.API_URL}/noticias`).then(response => {
            context.commit('set', response.data);
        });
    }
};

/**
 *  export module
 *  namespaced serve para acessar a variável de forma fluente, por exemplo: store.noticias.dispatch()
 *
 * @type {{mutations, state: {noticias: Array}, actions, namespaced: boolean}}
 */
const module = {
    namespaced: true,
    state, mutations, actions
};

export default module;
