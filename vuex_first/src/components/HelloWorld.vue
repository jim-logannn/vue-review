<template>
  <div>
    <p>当前值：{{sum}}</p>
    <p>当前学校：{{school}}</p>
    <p>放大后的sum{{$store.getters.bigSum}}</p>
    <button :value="2" @click="JIA(n)">+</button>
    <button :value="2" @click="JIAN(n)">-</button>
    <button :value="2" @click="jia(n)">-</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      n:2
    }
  },
  computed:{
    //借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({"all":"sum","school":"school"})

    //借助mapState生成计算属性，从state中读取数据（数组写法）生成的计算属性名和读取的名字要相同
    ...mapState(["sum","school"])
  },
  methods:{
    jia(){
      // this.$store.dispatch("jia",this.n)
      // this.$store.commit('JIA',this.n)
    },
      // this.$store.commit('JIA',this.n)
      // ...mapMutations({"jia":"JIA"})
      //需要在调用函数时候传参
      ...mapMutations(["JIA","JIAN"]),
       //同理可得用mapActions联系actions
       ...mapActions(["jia"])
  },
  mounted(){
    console.log(this);
    // const x=mapState({"all":"sum","school":"school"})
  }
}
</script>

<style>

</style>