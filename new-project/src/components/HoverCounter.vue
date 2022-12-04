<template>
    <div>
        <button @click="incrementCount">Count is {{ count }}</button>
    </div>
</template>

<script>
// import CounterMixin from '../mixins/counter'
import userCounter from '@/composeable/userCounter'
    export default {
        name: 'HoverCounter-Vue',
        setup(){
            const {count , incrementCount} = userCounter()

            return {
                count,
                incrementCount
            }
        },
        // data(){
        //     return {
        //         count: 1000,
        //     }
        // },
        // mixins: [CounterMixin]
        
}
</script>

<style scoped>

</style>