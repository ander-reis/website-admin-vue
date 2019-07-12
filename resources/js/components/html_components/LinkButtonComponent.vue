<template>
    <span>
        <a v-bind:href="rota" v-bind:class="classe">{{titulo}}</a>
    </span>
</template>

<script>
    export default {
        name: "LinkButtonComponent",
        props: ['rota', 'classe', 'titulo'],
    }
</script>
