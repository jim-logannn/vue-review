import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions——用于响应组件中的动作
const actions={
    jia(context,value){
        console.log("context",context);
        // console.log('JIA',value);
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    }
}
//准备mutations——用于操作数据（state）
const mutations={
    JIA(state,value){
        console.log(value);
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    }
}
//准备state——用于数据存储
const state={
    sum:10,
    school:"培正"
}
//准备getters——用于将state中的数据进行加工
const getters={
    bigSum(state){
        return (
            state.sum*10
        )
    }
}
//创建store
const store=new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

//导出store
export default store