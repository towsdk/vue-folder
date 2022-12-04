<template>
    <div>
Tab A content
    </div>
    <input type="text" v-model="name">
</template>

<script>
    export default {
        name: 'TabA-vue',
        data(){
            return {
                name: ''
            }
        }
    }
</script>

<style scoped>

</style>