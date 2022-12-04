<template>
 <ClickCounterVue />
 <HoverCounterVue />
</template>

<script>
import ClickCounterVue from './components/ClickCounter.vue';
import HoverCounterVue from './components/HoverCounter.vue';
export default {
  name: 'App',
  components: {
   ClickCounterVue,
   HoverCounterVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
