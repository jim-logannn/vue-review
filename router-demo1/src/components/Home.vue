<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <button @click="turntomovie">turn to movie 1</button>
    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    turntomovie(){
      this.$router.push('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
