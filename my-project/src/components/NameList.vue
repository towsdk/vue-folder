<template>
    <h3 v-for="name in names" :key="name.firstName">
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot></h3>
</template>

<script>
    export default {
        name: 'NameList-Vue',
        data(){
            return {
                names: [
                    {
                        firstName: 'Brue',
                        lastName: 'Wayne',
                    },
                    {
                        firstName: 'Brue1',
                        lastName: 'Wayne1',
                    },
                    {
                        firstName: 'Brue2',
                        lastName: 'Wayne2',
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>