<template>
  <div class="container" v-if="message.length !== 0">
    <el-card :body-style="{ padding: '0px' }" shadow="never" v-for="(item,index) in message" :key="index">
      <div class="user">
        <h3 class="name">{{item.name}}</h3>
        <p>{{item.comment}}</p>
      </div>
      <div class="root" v-if="item.author">
        <h3 class="creater">作者</h3>
        <p>{{item.author}}</p>
      </div>
      <div class="time">
        <span>{{item.createtime |formateDate}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "MessageDisplay",
    props:{
      message: {
        type : Array,
        default(){
          return []
        }
      }
    },
    filters: {
      formateDate(datetime) {
        function addDateZero(num) {
          return (num < 10 ? "0" + num : num);
        }
        let d = new Date(datetime);
        let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds());
        return formatdatetime;
      }
    }
  }
</script>

<style scoped>
  .container{
    padding: 20px 6%;
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