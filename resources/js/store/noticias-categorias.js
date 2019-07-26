import Vue from 'vue';
import ADMIN_CONFIG from '../services/admin.config';
import {NoticiasCategoria} from '../services/resources';

const state = {
    categorias: []
};

const mutations = {
    set(state, categorias){
        state.categorias = categorias;
    },
    add(state, categorias){
        state.categorias.push(categorias);
    },
};

const actions = {
    query(context, categorias){
        Vue.http.get(`${ADMIN_CONFIG.API_URL}/noticias-categorias`).then(response => {
            context.commit('set', response.data.data);
        });
    },
    // store(context, categorias){
    //     return NoticiasCategoria.categoriaCreate.save(context.state.categorias)
    //         .then(response => {
    //             console.log(response);
    //             context.commit('add', response.data)
    //         })
    // }
};

/**
 *  export module
 *  namespaced serve para acessar a variável de forma fluente, por exemplo: store.categorias.dispatch()
 *
 * @type {{mutations, state: {categorias: Array}, actions, namespaced: boolean}}
 */
const module = {
    namespaced: true,
    state, mutations, actions
};

export default module;
