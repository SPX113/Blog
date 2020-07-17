<template>
  <div class="star" :class="{active : islike}" @click.once="starClick">
    <i class="el-icon-star-off"></i>
    <p v-if="!islike">  如果您看完了,请给一颗星星吧！！！</p>
    <p v-else>  谢谢支持！！您的支持将会成为我进步的动力！！加油！！</p>
  </div>
</template>

<script>
  export default {
    name: "GiveStar",
    data(){
      return{
        islike : false
      }
    },
    methods:{
      starClick(){
        this.islike = true
      }
    }
  }
</script>

<style scoped>
  .star{
    padding: 40px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .star i{
    font-size: 45px;
    padding: 20px 0;
  }
  .active{
    color: rgb(247,112,112);
  }
</style>