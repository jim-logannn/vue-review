<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />

    <component :is="conName"></component>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default {
  data() {
    return {
      conName:'Home'
    }
  },
  created() {
    //只要当前App组件被创建，就立即监听window对象的onhashchange事件
    window.onhashchange=()=>{
      console.log(location.hash)
      switch(location.hash){
        case '#/home':
          this.conName='Home'
          break
        case '#/movie':
          this.conName='Movie'
          break
        case '#/about':
          this.conName='About'
          break
      }
    }
  },
  name: 'App',
  // 注册组件
  components: {
    Home,
    Movie,
    About
  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
