<template>
    <h3>Parent component {{ name }}</h3>
    <h3>Parent component {{ count }}</h3>
    <h3>Parent component {{ firstName }}{{ lastName }}</h3>
    <ChildA />

    <button @click="incrementCount">Increment</button>
</template>

<script>
import { provide, ref, reactive, toRefs } from 'vue';
import ChildA from './ChildA.vue';
    export default {
        components: {ChildA},
        name: 'ProvideInject-vue',
        setup(){
            provide('c_userName', "towsdk")

            const count = ref(0)
            function incrementCount(){
                count.value++
            }
            const state = reactive({
                firstName: 'bure',
                lastName: 'aat'
            })

            provide('c_count', count)
            provide('c_state', state)
            provide('increment', incrementCount)


            return{
                count,
                ...toRefs(state),
                incrementCount,
            }
        },
        data(){
            return{
                name: 'Viswas',
            }
        },
        provide(){
            return{
                userName: this.name
            }
        },
    }
</script>

<style scoped>

</style>