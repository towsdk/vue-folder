<template>
    <div>
        <button @mouseover="incrementCount">Count is {{ count }}</button>
    </div>
</template>

<script>
// import CounterMixin from '../mixins/counter'
import userCounter from '@/composeable/userCounter';
    export default {
        name: 'ClickCounter-Vue',
        setup(){
            const {count , incrementCount} = userCounter(100, 10)

            return {
                count,
                incrementCount
            }
        }
        // mixins: [CounterMixin]
      
    }
    
</script>

<style scoped>

</style>