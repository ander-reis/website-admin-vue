import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'

import NoticiasListComponent from "./components/admin/noticias/NoticiasListComponent";
import NoticiasCreateComponent from "./components/admin/noticias/NoticiasCreateComponent";
import NoticiasUpdateComponent from "./components/admin/noticias/NoticiasUpdateComponent";

import CategoriaListComponent from "./components/admin/noticias/categorias/CategoriaListComponent";
import CategoriaCreateComponent from "./components/admin/noticias/categorias/CategoriaCreateComponent";

import LoadingTestComponent from "./components/admin/loading/LoadingTestComponent";
import LoadingTestPlugin from "./components/admin/loading/LoadingTestPlugin";

import LoadingComponent from "./components/admin/loading/LoadingComponent";
import ErrorComponent from "./components/admin/loading/ErrorComponent";
import CategoriaUpdateComponent from "./components/admin/noticias/categorias/CategoriaUpdateComponent";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: App,
        },
        {
            name: 'noticias',
            path: '/noticias',
            component: NoticiasListComponent,
            // children: [
            //     {
            //         path: '/noticias/cadastrar',
            //         component: NoticiasCreateComponent,
            //         name: 'noticias.create',
            //     },
            // ]
        },
        {
            name: 'noticias.create',
            path: '/noticias/cadastrar',
            component: NoticiasCreateComponent
        },
        {
            name: 'noticias.update',
            path: '/noticias/:id/editar',
            component: NoticiasUpdateComponent
        },

        // noticias categoria
        {
            name: 'noticias.categoria.list',
            path: '/noticias/categoria',
            component: CategoriaListComponent,
            // children: [
            //     {
            //         name: 'noticias.categoria.update',
            //         path: ':id/editar',
            //         component: CategoriaUpdateComponent
            //     }
            // ]
        },
        {
            name: 'noticias.categoria.update',
            path: '/noticias/categoria/:id/editar',
            component: CategoriaUpdateComponent
        },
        {
            name: 'noticias.categoria.create',
            path: '/noticias/categorias/create',
            component: CategoriaCreateComponent
        },

        //loading
        {
            name: 'loading-test-plugin',
            path: '/loading-test-plugin',
            component: LoadingTestPlugin,
        },
        {
            name: 'loading-test-component',
            path: '/loading-test-component',
            component: LoadingTestComponent,
        },
    ]
});
