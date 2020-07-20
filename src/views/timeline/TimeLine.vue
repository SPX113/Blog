<template>
  <div class="contain">
    <el-timeline>
      <el-timeline-item color="#c7c6c5" v-for="(item,index) in message" :timestamp="item.createtime | formatetime" placement="top" :key="index">
        <el-card>
          <h3>{{item.title}}</h3>
          <p>{{item.describe}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  import { getTimeLine } from "network/timeline";

  export default {
    name: "TimeLine",
    data(){
      return{
        message : []
      }
    },
    created() {
      getTimeLine().then(res => {
        this.message = res.data
      })
    }
  }
</script>

<style scoped>
  .contain{
    width: 70%;
    margin-left: 170px;
  }
  h3{
    margin-bottom: 10px;
    color: #921f02;
    font-size: 20px;
  }
  p{
    margin-bottom: 10px;
    line-height: 30px;
  }
  >>>.el-timeline-item__timestamp{
    color: #909399;
  }
  >>>.el-timeline-item__tail{
    border-left: 2px solid #c7c6c5;
  }
</style>