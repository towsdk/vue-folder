<template>
    <div>
        Parent components
        <button @click="showChild = !showChild">Toggle Child</button>
        <child v-if="showChild"  />
    </div>
</template>

<script>
import Child from './Child.vue'
    export default {
        components: {Child},
        name: 'Parent-Vue',
        data(){
            return{
                showChild: false,
            }
        },
        beforeCreate(){
            console.log("Parent beforeCreate()")
        },
        created(){
            console.log('Parent crated()')
        },
        beforeMount(){
            console.log('Parent beforeMount()')
        },
        mounted(){
            console.log('Parent mounted()')
        },
        beforeUpdate(){
            console.log('Parent beforeUpdate()')
        },
        updated(){
            console.log('Parent updated()')
        },
        beforeUnmount(){
            console.log("Parent beforeUnmount()")
        },
        unmounted(){
            console.log('Parent unmounted()')
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>