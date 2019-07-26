<template>
    <div>

        <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :opacity="0.9"
                 :is-full-page="fullPage"></loading>

        <router-link class="btn btn-outline-primary" :to="{name: 'noticias.create'}">Cadastrar Notícias</router-link>
        <router-link class="btn btn-outline-secondary" :to="{name: 'noticias.categoria.list'}">Cadastrar Categorias</router-link>
        <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">Voltar</button>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th class="text-center">Data Cadastro</th>
                <th class="text-center">Status da Notícia</th>
                <th class="text-center">Data Noticia</th>
                <th class="text-center">Editar</th>
                <th class="text-center">Ver</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in noticias">
                <td>{{data.id_noticia}}</td>
                <td>{{data.ds_texto}}</td>
                <td class="text-center">{{data.dt_noticia | dateBr }}</td>
                <td class="text-center">{{data.fl_oculta}}</td>
                <td class="text-center">{{data.dt_noticia | dateBr }}</td>
                <td>
                    <router-link class="btn btn-primary" :to="{name: 'noticias.update', params: {id: data.id_noticia} }">Editar</router-link>
                </td>
                <td>
                    ver
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import store from '../../../store/store';

    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        props: [],
        data(){
            return {
                fullPage: true,
            }
        },
        components: {
            Loading,
        },
        computed: {
            noticias() {
                this.isLoading = false;
                return store.state.noticias.noticias;
            }
        },
        created() {
            this.isLoading = true;
            store.dispatch('noticias/query');
        },
        methods: {
            onCancel() {
                this.isLoading = false;
                console.log('User cancelled the loader.')
            }
        }
    }
</script>

<style scoped>
    table th:nth-child(1) {
        width: 50px;
    }

    table th:nth-child(2) {
        width: 500px;
    }

    table th:nth-child(3) {
        width: 140px;
    }

    table th:nth-child(4) {
        width: 140px;
    }

    table th:nth-child(5) {
        width: 140px;
    }
</style>
