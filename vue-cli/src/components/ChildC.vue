<template>
    <h2>Child component c</h2>
    <h2>Child component C userName -{{ userName }}</h2>
    <h2>Child compostion -{{ childUser }}</h2>
    <h2>Child compostion -{{ childCount }}</h2>
    <h2>Child compostion -{{ firstName }}{{ lastName }}</h2>

    <button @click="incrementCount">increment</button>
</template>

<script>
import { inject, toRefs } from 'vue';
    export default {
        name: 'ChildC-vue',
        setup(){
            const childUser = inject('c_userName', "default username")
            const childCount = inject('c_count', 0)
            const childHero = inject('c_state', {})
            const incrementCount = inject('increment' )
            return {
                childUser,
                childCount,
                ...toRefs(childHero),
                incrementCount
            }
        },
        inject: ['userName'],
        
    }
</script>

<style scoped>

</style>