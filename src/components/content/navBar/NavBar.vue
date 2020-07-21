<template>
  <div class="nav-bar">
      <ul class="nav">
        <li :class="{active : currentIndex === index}" v-for="(item,index) in list" :key="index" @click="select(index)">{{item}}</li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data(){
      return {
        list: ['首页','时间线','留言板','关于'],
        path:['/index','/timeline','/message','/about'],
      }
    },
    methods:{
      select(index){
        this.$router.push(this.path[index])
      }
    },
    computed:{
      currentIndex(){
        for(let i=0;i < this.path.length;i++)
        {
          if(this.$route.path.indexOf(this.path[i]) !== -1){
            return i
          }
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    height: 160px;
    padding: 0 170px;
    align-items: center;
    display: flex;
  }
  .nav{
    font-size: 18px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .nav li{
    float: left;
    list-style: none;
    font-weight: 700;
    margin-right: 18px;
    cursor: pointer;
  }
  .active{
    border-bottom: rgba(164,182,223) solid 2px;
    padding-bottom: 5px;
  }
</style>