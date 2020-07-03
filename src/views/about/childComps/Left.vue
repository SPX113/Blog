<template>
  <div class="left">
    <el-card shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>简介</span>
      </div>
      <div class="text item" v-for="(item,index) in list" :key="index">
        {{item}}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Left",
    data(){
      return{
        list:['准大四学生','拖延癌晚期患者','资深嘴强王者','不懂装懂第一人','睡王','精神小伙']
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 16px;
    font-weight: bold;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>