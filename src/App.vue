<template>
  <div id="app">
    <myheader></myheader>
    <mybody1></mybody1>
    <mybody2></mybody2>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from './components/MyHeader.vue'
import mybody1 from './components/MyBody1.vue'
import mybody2 from './components/MyBody2.vue'
import myfooter from './components/MyFooter.vue'

export default {
  name: 'app',
  components: {
    myheader,
    mybody1,
    mybody2,
    myfooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  width: 100%;
}
</style>
