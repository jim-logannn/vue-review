<template>
  <div class="movie-container">
    <h3>Movie 组件 {{this.$route.params.mid}}---{{mid}}</h3>
    <h2>{{$route.query.name}}</h2>
    <h4>{{$route.query.age}}</h4>
    <button @click="showthis">showthis</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  methods:{
    showthis(){
      console.log(this);
    }
  },
  props:['mid'],
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
