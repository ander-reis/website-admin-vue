import 'vue-resource';
import ADMIN_CONFIG from './admin.config';
import Vue from 'vue';

let NoticiasCategoria = {
    categoriaList: Vue.resource(`${ADMIN_CONFIG.API_URL}/noticias-categorias`),
    categoriaCreate: Vue.resource(`${ADMIN_CONFIG.API_URL}/noticias-categorias`)
};

export {
    NoticiasCategoria
}
