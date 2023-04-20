//src/router/index.js就是当前项目的路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Movie from '@/components/Movie.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'
//把VueRouter安装为Vue插件
Vue.use(VueRouter)
//创建路由的实例对象
const router=new VueRouter({
    //routes是一个数组,作用是定义hash地址与组件之间的关系
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/about',component:About,redirect:'/about/tab2',children:[
            //默认子路由:如果children数组中,某个路由规则的path值为空字符串,则这条路由规则为默认路由
            {path:'',component:Tab1},
            {path:'tab2',component:Tab2},
        ]},
        //在movie组件中希望根据id的值，展示对应电影的详情信息
        //可以为路由开启props传参，方便拿到数值
        {path:'/movie/:mid',component:Movie,props:true},
        {path:'/login',component:Login},
        {path:'/main',component:Main},
    ]
})
//为router实例对象声明全局前置导航守卫
//只要发生了路由跳转，必然会触发beforeEach指定的function回调函数
router.beforeEach(function(to,from,next){
    //next表示放行的意思
    //from表示将要离开的信息对象
    //to表示将要访问的路由信息对象
    if(to.path==='/main'){
        const token=localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})

export default router
