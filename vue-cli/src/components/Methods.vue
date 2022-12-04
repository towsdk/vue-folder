<template>
    <div>
        <h1>{{ name }}</h1>
        <button @click="setName">ChangeName</button>


<h2>{{ count }}</h2>
<button @click="incrementVue">Increment</button>

<h2>{{ first }}{{ last }}</h2>
<button @click="changeHero">ChangeHero</button>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from '@vue/reactivity';

    export default {
        name: 'Methods-vue',
         setup(){
            const count = ref(0)
            const state = reactive({
                first: 'Bruce',
                last: 'Wayne'
            })
            function incrementVue(){
                count.value += 1
            }
            function changeHero(){
                state.first = 'Clark',
                state.last = 'Kent'
            }
        return{
            count,
            incrementVue,
            ...toRefs(state),
            changeHero
        }
        },
        data(){
            return {
                name: 'Siddiqui'
            }
        },
        methods: {
            setName(){
                this.name = "Towhid"
            }
        }
    }
</script>

<style scoped>

</style>