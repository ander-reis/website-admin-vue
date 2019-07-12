<template>
    <table class="table">
        <thead>
        <tr>
            <slot name="header"></slot>
        </tr>
        </thead>
        <tbody>
            <slot name="body"></slot>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'TableComponent',
        props: ['data', 'noticia'],
    }
</script>

<style scoped>

</style>
