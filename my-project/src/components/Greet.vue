<template>
    <h2>Hello {{ name }} and {{ heroname }}</h2>
</template>

<script>
export default {
    name: 'Greet-Vue',
    props: ['name', 'heroname']
}
</script>

<style  scoped>

</style>>