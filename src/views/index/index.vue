<template>
  <div class="index">
    <swiper :newArticle = "newArticle"/>
  </div>
</template>

<script>
  import {getArticle} from "network/home";
  import Swiper from "./childComps/Swiper";
  export default {
    name: "index",
    components:{
      Swiper
    },
    data(){
      return {
        newArticle : []
      }
    },
    created() {
      getArticle().then(res => {
        this.newArticle = res.data
        console.log(this.newArticle)
      })
    }
  }
</script>

<style scoped>

</style>