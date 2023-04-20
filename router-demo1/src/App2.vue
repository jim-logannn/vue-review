<template>
  <div class="app-container">
    <h1>App2 组件</h1>

    <router-link to="/home">首页</router-link>
    <!-- 在路由参数对象中（$router）需要使用this.$route.query来访问查询参数 -->
    <router-link to="/movie/1?name=logan&age=24">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/about">关于</router-link>
    <hr />

    <!-- 只要在项目中安装和配置了vue-router，就可以使用router-view -->
    <!-- 他的作用是占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
