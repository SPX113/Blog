<template>
  <div class="top">
    <div class="image">
      <el-image :src="articleInfo.photo" fit="fill" height="380"></el-image>
    </div>
    <div class="info">
      <h1>{{articleInfo.title}}</h1>
      <div class="tag">
        <el-tag type="info" v-for="(item,index) in articleInfo.tags" :key="index">{{item}}</el-tag>
      </div>
      <div class="footer">
        <i class="el-icon-edit"></i>
        <span> {{ articleInfo.createtime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    props: {
      articleInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .el-image{
    height: 380px;
  }
  .info{
    position: absolute;
    z-index: 100;
    top: 35%;
    left: 20%;
    width: 60%;
    color: #fff;
  }
  .info h1{
    font-size: 35px;
    margin-bottom: 25px;
  }
  .tag{
    margin: 0 10px 25px 0;
  }
  .el-tag{
    color: black;
    font-size: 15px;
    margin-right: 10px;
  }
</style>