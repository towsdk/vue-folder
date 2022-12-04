<template>
    <div>
<h2>{{ firstName }} {{ lastName }}</h2>
<h2>{{ fname }}{{ lname }}</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
    export default {
        name: 'DemoTwo-vue',
        setup(){
            
                const state = reactive({
                    firstName: 'Towhid',
                    lastName: 'Siddiqui'
                })

                setTimeout(()=>{
                    state.firstName = 'Clark',
                    state.lastName = 'Kent'
                }, 2000)
                return toRefs(state)
    },
    data(){
        return{
            fname: 'Bruce',
            lname: ' Wayne'
        }
    }
}
</script>

<style scoped>

</style>