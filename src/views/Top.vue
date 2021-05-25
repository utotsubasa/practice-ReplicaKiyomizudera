<template>
  <div id="app">
    <myheader @displayShadow="showShadow=true" @deleteShadow="showShadow=false" ref="myheader"></myheader>
    <mybody1></mybody1>
    <mybody2></mybody2>
    <myfooter></myfooter>
    <div class="fade" @click="hideShadow" v-show="showShadow"></div>
  </div>
</template>

<script>
import myheader from '../components/MyHeader.vue'
import mybody1 from '../components/MyBody1.vue'
import mybody2 from '../components/MyBody2.vue'
import myfooter from '../components/MyFooter.vue'

export default {
  name: 'app',
  components: {
    myheader,
    mybody1,
    mybody2,
    myfooter,
  },
  data() {
    return {
      showShadow:false
    }
  },
  methods: {
    hideShadow() {
      this.showShadow=false;
      this.$refs.myheader.hideMenu();
    }
  }
}

</script>

<style>
#app {
  position:absolute;
  top:0;
  left:0;
  font-family: Lato,Hiragino Kaku Gothic ProN,"ヒラギノ角ゴ ProN W3","游ゴシック",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  width: 100%;
}
.fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  z-index : 5000;
}
</style>