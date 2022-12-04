<template>
    <div>
<input type="text" placeholder="Fname" v-model="fname">
<input type="text" placeholder="Lname" v-model="lname">
<input type="text" placeholder="Lname" v-model="heroName">
<input type="text" placeholder="Lname" v-model="firstName">
<input type="text" placeholder="Lname" v-model="lastName">

    </div>
</template>

<script>
import {ref, reactive, toRefs} from 'vue'
    export default {
        name: 'Vmodel-vue',
        setup(){
            const heroName = ref('')
            const state = reactive({
                firstName: '',
                lastName: ''
            })
            return{
                heroName,
                ...toRefs(state)
            }
        }
        ,
        data(){
            return{
                fname: '',
                lname: ''
            }
        }
    }
</script>

<style scoped>

</style>