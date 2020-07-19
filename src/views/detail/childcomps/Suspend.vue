<template>
  <div class="control">
    <div class="menu">
      <i class="el-icon-notebook-2"></i>
      <p>menu</p>
    </div>
    <div class="star" :class="{active : islike}">
      <i class="el-icon-star-off" @click.once="giveStar" ></i>
      <p>{{stars}}</p>
    </div>
    <div class="comments" @click="toComments">
      <i class="el-icon-chat-dot-round"></i>
      <p>{{comments}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Suspend",
    props:{
      islike:{
        type : Boolean,
        default : false
      },
      stars:{
        type: Number,
        default: 0
      },
      comments:{
        type: Number,
        default : 0
      }
    },
    methods:{
      giveStar(){
        if(!this.islike) {
          this.$emit('starClick')
        }
      },
      toComments(){
        this.$emit('toComments')
      }
    }
  }
</script>

<style scoped>
  .control{
    position: fixed;
    background-color: #fff;
    top: 35%;
    right: 4px;
    padding: 10px;
    display: flex;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .control i{
    font-size: 30px;
    cursor: pointer;
  }
  .control div{
    margin: 5px 0;
  }
  .active{
    color: red;
  }
</style>