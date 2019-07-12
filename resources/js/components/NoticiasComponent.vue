<template>
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
        <tr v-for="noticia in noticias">
            <td>{{noticia.id_noticia}}</td>
            <td>{{noticia.ds_texto}}</td>
            <td class="text-center">{{noticia.dt_cadastro | formatDate}}</td>
            <td class="text-center">{{noticia.fl_oculta}}</td>
            <td class="text-center">{{noticia.dt_cadastro | formatDate}}</td>
            <td>
                editar
            </td>
            <td>
                ver
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import store from '../store/store';
    import moment from 'moment';


    export default {
        props: [],
        computed: {
            noticias() {
                return store.state.noticias.noticias;
            }
        },
        mounted() {
            store.dispatch('noticias/query')
        },
        filters: {
            formatDate(value) {
                // return valor.replace('-', '/').replace('-', '/');
                if(value){
                    console.log(value);
                    return moment(value, "DD/MM/YYYY").format('DD/MM/YYYY');
                    // return moment(value, 'DD/MM/YYYY');
                }
            }
        }
    }
</script>

<style scoped>
    table th:nth-child(1){
        width: 50px;
    }
    table th:nth-child(2){
        width: 500px;
    }
    table th:nth-child(3){
        width: 140px;
    }
    table th:nth-child(4){
        width: 140px;
    }
    table th:nth-child(5){
        width: 140px;
    }
</style>
