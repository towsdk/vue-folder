import { ref } from "vue";

export default function userCounter(initialCount = 0, stepSiize = 1){
    const count = ref(initialCount)

    function incrementCount(){
        count.value += stepSiize
    }

    return {
        count,
        incrementCount
    }
}