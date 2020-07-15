<template>
  <div id="app">
    <nav-bar/>
    <transition name="fade" mode="in-out">
      <keep-alive exclude="Detail">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import NavBar from "components/content/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
