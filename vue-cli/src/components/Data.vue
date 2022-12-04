<template>
   <h2>Options -- {{ o_firstName }}</h2>
   <h2>REf -- {{ o_firstName }}{{ o_lastName }} {{ o_guestName }}</h2>

   <h2>{{ c_firstName }}</h2>
   <h1>compositn -- {{ greet }}</h1>

   <h1>{{ greetHero }}</h1>

   <h1>{{ res }}</h1>
</template>

<script>
import { ref, reactive } from 'vue';
    export default {
        name: 'Data-vue',
        setup(){
            const c_firstName = ref('Clark');
            const c_lirstName = ref('Clark 1');
            const c_kirstName = ref('Clark 2');
            c_firstName.value = 'Diana';
            const greet = `Hello ${c_firstName.value}`
            const greetHero = `Hello ${c_firstName.value} ${c_lirstName.value} a.k.a ${c_kirstName.value}`

            const state = reactive({
                firsrName: 'Prince',
                lastName: 'walse',
                ges: 'lse'
            });

            const res = ` Hello ${state.firsrName} && ${state.lastName} && ${state.ges}`

            return{
                c_firstName,
                greet,
                greetHero,
                res
            }
        },
        data(){
            return{
                o_firstName: "lendy",
                o_lastName: ' sandy',
                o_guestName: 'Emoni',
            }
        }
    }
</script>

<style scoped>

</style>