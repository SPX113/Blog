<template>
  <div class="about">
    <left/>
    <Right/>
  </div>
</template>

<script>
  import Left from "./childComps/Left";
  import Right from "./childComps/Right";
  export default {
    name: "About",
    components:{
      Left,Right
    }
  }
</script>

<style scoped>
  .about{
    display: flex;
    justify-content: center;
  }
</style>