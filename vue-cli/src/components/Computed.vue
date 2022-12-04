<template>
    <div>
<input type="text" placeholder="First Name" v-model="fname">
<input type="text" placeholder="Last Name" v-model="lname">
<h2>Total name {{ fullName }}</h2>

<input type="text" placeholder="First Name" v-model="firstName">
<input type="text" placeholder="First Name" v-model="lastName">
<h1>computed {{ fullName1 }}</h1>

<input type="text" placeholder="First Name" v-model="reactiveFirstName">
<input type="text" placeholder="First Name" v-model="reactiveLastName">
<h1>computed {{ fullName2 }}</h1>
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'
    export default {
        name: 'Computed-vue',
        setup(){
            const firstName = ref('')
            const lastName = ref('')

            const fullName1 = computed(function(){
                return `${firstName.value} && ${lastName.value}`
            })
            

            const state = reactive({
                reactiveFirstName : '',
                reactiveLastName: '',
               
            })

            const fullName2 = computed(function(){
                return `${state.reactiveFirstName} && ${state.reactiveLastName}`
            })
            return{
                firstName,
                lastName,
                fullName1,
                ...toRefs(state),
                fullName2
            }
        }
        ,
        data(){
            return{
                fname: '',
                lname: ''
            }
        },
        computed: {
            fullName(){
                return `${this.fname} & ${this.lname}`
            }
        }
    }
</script>

<style scoped>

</style>