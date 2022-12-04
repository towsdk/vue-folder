<template>
    <div>
        <input type="text" ref="inputRef" />
        <PostList ref="postRef"/>
    </div>
</template>

<script>
import PostList from './PostList.vue';
    export default {
        name: 'TemplateRef-vue',
        mounted(){
            console.log(this.$refs.postRef)
            this.$refs.inputRef.focus();
            // this.$refs.postRef.focus();
        },
        components: { PostList},
    }
</script>

<style scoped>

</style>