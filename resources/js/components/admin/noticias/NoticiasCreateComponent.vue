<template>
    <div>
        <h1>Noticias Cadastrar</h1>

        <noticias-form-component></noticias-form-component>

        <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">Voltar</button>
    </div>
</template>

<script>
    import NoticiasFormComponent from "./NoticiasFormComponent";
    export default {
        name: "NoticiasCreateComponent",
        components: {NoticiasFormComponent},
    }
</script>

<style scoped>

</style>
