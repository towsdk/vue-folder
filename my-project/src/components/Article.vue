<template>
    <div>
        <h3>Article Components</h3>
        <h2 v-bind="$attrs"> {{ title }}</h2>
        <h2> {{ likes }}</h2>
        <h2> Published --{{ isPublished ? 'Yes': '' }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Article-Vue',
        props: {
            title: {
                type: String,
                required: true,
                default: "article default title"
            },
            likes: Number,
            isPublished: Boolean,
        },
        inheritAttrs: false,
    }
</script>

<style lang="scss" scoped>

</style>