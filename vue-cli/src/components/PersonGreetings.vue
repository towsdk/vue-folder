<template>
    <div>Hello {{ fullName}}   </div>
    
    <button @click="sendEvent">Send to parents</button>
</template>

<script>
import {computed} from 'vue'
    export default {
        name: 'PersonGreetings-vue',
        setup(props, context){
            const fullName = computed(()=>{
                return `${props.firstName} ${props.lastName}`   
            })
            function sendEvent(){
                context.emit('callHeros', fullName.value)
            }

            return {
                fullName,
                sendEvent
            }
        },
        props: ['firstName', 'lastName'],
        // computed: {
        //     fullName(){
        //        return `${this.firstName} ${this.lastName}`
        //     }
        // }
    }
</script>

<style scoped>

</style>