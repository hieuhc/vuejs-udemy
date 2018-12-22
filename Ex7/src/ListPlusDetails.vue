<template>
    <div class="row">
        <list-group></list-group>
        <server-details></server-details>
    </div>
</template>

<script>
    import ServerDetail from './ServerDetail.vue'
    import ListGroup from './ListGroup.vue'
    export default {
        components:{
            'server-details': ServerDetail,
            'list-group': ListGroup
        }
    }
</script>

<style></style>