<template>
    <!-- Como um link -->
    <nav class="navbar navbar-dark bg-dark">
        <router-link class="navbar-brand" :to="{name: 'home'}">Sinpro</router-link>
    </nav>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style scoped>

</style>
