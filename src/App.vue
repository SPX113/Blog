<template>
  <div id="app">
    <nav-bar/>
    <transition name="fade" mode="in-out">
      <keep-alive exclude="Detail">
        <router-view/>
      </keep-alive>
    </transition>
    <back-top/>
    <music-box/>
  </div>
</template>

<script>
  import NavBar from "components/content/navBar/NavBar";
  import BackTop from "./components/common/backTop/BackTop";
  import MusicBox from "./components/common/musicBox/MusicBox"

export default {
  name: 'App',
  components: {
    NavBar,BackTop,MusicBox
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
  #app{
    overflow-y: scroll;
  }
</style>
