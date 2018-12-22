<template>
    <div class="container">
        <server-status></server-status>
        <hr>
        <list-plus-details></list-plus-details>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import ServerStatus from './ServerStatus.vue'
    import ListPlusDetail from './ListPlusDetails.vue'
    import Footer from './Footer.vue'
    export default {
        components: {
            'server-status': ServerStatus,
            'list-plus-details': ListPlusDetail,
            'app-footer': Footer

        }
    }
</script>

<style></style>