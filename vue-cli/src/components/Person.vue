<template>
    <div>
        <input type="text" placeholder="Enter f Name" v-model="firstName" />
        <input type="text" placeholder="Enter L Name" v-model="lastName" />
    </div>
    <PersonGreetings :firstName="firstName" :lastName="lastName" @callHeros="callHeros"/>
</template>

<script>
import { ref } from 'vue';
import PersonGreetings from './PersonGreetings.vue';
    export default {
        name: 'Person-vue',
        components: {
            PersonGreetings,
        },
        setup(){
            const firstName = ref('')
            const lastName = ref('')
            function callHeros(callHeros){
                alert(`calling ${callHeros}`)
            }
            return{
                firstName,
                lastName,
                 callHeros
            }
        }
    }
</script>

<style scoped>

</style>