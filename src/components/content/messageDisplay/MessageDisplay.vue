<template>
  <div class="container">
    <el-card :body-style="{ padding: '0px' }" shadow="never">
      <div class="user">
        <h3 class="name">adasd</h3>
        <p>adasdasdasdasfafsasfasdfasfdsdfsdfsdfsdfsdfdsfsdfsdfsdfsdfsdfsda</p>
      </div>
      <div class="root">
        <h3 class="creater">作者</h3>
        <p>adasdasdasd💪</p>
      </div>
      <div class="time">
        <span>2020-7-18 23:00</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "MessageDisplay"
  }
</script>

<style scoped>
  .container{
    padding: 20px 5%;
  }
  h3{
    padding-left: 10px;
  }
  .el-card{
    padding: 20px;
    margin-bottom: 20px;
  }
  .name{
    box-shadow: -4px 0 0 -1px #a4b6df;
  }
  .creater{
    box-shadow: -4px 0 0 -1px red;
  }
  .root{
    margin-left: 56px ;
  }
  .el-card p{
    margin: 20px 0;
  }
  .time {
    width: 100%;
    text-align: right;
  }
</style>