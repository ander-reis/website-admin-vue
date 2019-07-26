<template>
    <span>
<!--        <a v-bind:href="rota" v-bind:class="classe">{{titulo}}</a>-->
<!--        <a class="btn btn-primary">Botão</a>-->
        <router-link :to="rota">{{titulo}}</router-link>
    </span>
</template>

<script>
    export default {
        name: "LinkButtonComponent",
        props: ['rota', 'classe', 'titulo'],
    }
</script>
