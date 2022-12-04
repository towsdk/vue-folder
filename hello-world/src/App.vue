<template>
  <h2>Welcome tracker(0-20)</h2>
  <h3>cureent traceker volume -{{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>
  <input type="text" v-model="movie">
  <input type="text" v-model="movieInfo.title">
  <input type="text" v-model="movieInfo.actor">
  <div>
    <button @click="movieList.push('Wonder women')">Add movie</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      volume: 0,
      movie: 'Batman',
      movieInfo: {
        title: '',
        actor: ''
      },
      movieList: ['batman', 'superman']
    }
},
  methods: { }, 
  
  computed: {},
  watch: {
    volume(newValue, oldValue){
      if(newValue > oldValue && newValue == 16){
        alert('too high')
      }
    },
    movie: {
      handler(newValue){
    console.log(`calling api with new value = ${newValue}`)
  },
  immediate: true,
},
movieInfo: {
  handler(newValue){
    console.log(`Calling with new title = ${newValue.title} & ${newValue.actor}`);
  },
  deep: true
},
movieList: {
  handler(newValue){
    console.log(`updatew list ${newValue}`)
  },
  deep: true
}

  
  },
  
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
