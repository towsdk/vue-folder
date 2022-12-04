<template>
    <div>
<input type="text" placeholder="enter text" v-model="name">
<input type="text" placeholder="FirstName" v-model="firstName">
<input type="text" placeholder="LastName" v-model="lastName">
<input type="text" placeholder=" REactive LastName" v-model="fName">
<input type="text" placeholder=" REactive LastName" v-model="lName">

<input type="text" placeholder="HeroName" v-model="options.heroName">

    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue';
import _ from 'loadash';
    export default {
        name:'Watch-vue',
        setup(){
            const state = reactive({
                fName: '',
                lName: '',
                options: {
                    heroName: ''
                }
            })

            // watch(()=> {
            //     return {...state}
            // }, function(oldValue, newValue){
            //     console.log('newValue', newValue.fName)
            //     console.log('odl', newValue.lName)
            //     console.log('firstname', oldValue.fName)
            //     console.log('firstname', oldValue.lName)
            // })

            watch(
                ()=> _.cloneDeep(state.options),
                function(oldValue, newValue){
                    console.log(newValue)
                    console.log(oldValue)
                },
                {
                    deep: true
                }
            )
          const firstName = ref('')
          const lastName = ref('Wayne')
            watch([firstName, lastName], (oldValue, newValue)=> {
                console.log(' First Name Oldvalue', oldValue[0])
                console.log('First Name Newvalue', newValue[0])
                console.log(' First Name Oldvalue', oldValue[1])
                console.log('First Name Newvalue', newValue[1])
            },
            {
                immediate: false
            })
          return {
            firstName,
            lastName,
            ...toRefs(state)
          }
        }
        ,
        data(){
            return{
                name: '',
            
            }
        },

       watch: {
        name(name1, name2){
            console.log('name1 ' + name1);
            console.log('name2 ' +name2)
        }
       }
        
    }
</script>

<style scoped>

</style>