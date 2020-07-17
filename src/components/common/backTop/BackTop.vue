<template>
    <el-backtop target="#app" :bottom="100" :visibility-height="600">
      <div
              style="{
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }"
      >
        <i class="el-icon-arrow-up" style="font-weight: bolder"></i>
      </div>
    </el-backtop>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>

</style>