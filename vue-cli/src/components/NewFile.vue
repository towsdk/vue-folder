<template>
  <h2> Hi {{ name }}</h2>
</template>

<script>
import {ref} from 'vue'
    export default {
        name: 'NewFile-Vue',
        setup(){
            const name = ref('Siddiqui')

            setTimeout(()=>{
                name.value = 'Towhid'
                console.log(name)
            }, 2000)

            return{
                name,
            }
        }
    }
</script>

<style scoped>

</style>