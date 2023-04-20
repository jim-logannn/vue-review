import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
//导入路由模块，拿到路由实例对象
//在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹下名字叫index.js的文件
import router from '@/router'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App2),
  //在vue项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂在
  //router：路由实例对象
  router
}).$mount('#app')
