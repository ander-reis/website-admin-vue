<template>
    <div>
        <h1>Categorias</h1>

        <div class="mt-3 mb-3">
            <router-link class="btn btn-outline-primary" :to="{name: 'noticias.categoria.create'}">Cadastrar Categoria</router-link>
        </div>

        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Título</th>
                <th class="text-center">Editar</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="data in categorias">
                <td>{{data.id_categoria}}</td>
                <td>{{data.ds_categoria}}</td>
                <td>
<!--                    <router-link class="btn btn-primary" :to="`/noticias/categoria/${data.id_categoria}`">Editar</router-link>-->
                    <router-link class="btn btn-primary" :to="{name: 'noticias.categoria.update', params: {id: data.id_categoria}}">Editar</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import store from '../../../../store/store';

    export default {
        name: "CategoriasListComponent",
        computed: {
            categorias(){
                return store.state.categorias.categorias;
            }
        },
        created(){
            store.dispatch('categorias/query');
        },
        methods: {
            editarCategoria(categoria){
                console.log(categoria);
            }
        }
    }
</script>

<style scoped>

</style>
