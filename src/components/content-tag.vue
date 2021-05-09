<template>
  <span class=content-tag-area v-on:mouseover="show=true" v-on:mouseleave="show=false">
    <router-link :to='to' class="link">
      <span class="text-area">
        <transition name="transition-text-shown">
          <span class="text shown" v-if="!show"><slot name="title">default</slot></span>
        </transition>
        <transition name="transition-text-hidden">
          <span class="text hidden" v-if="show"><slot name="title">default</slot></span>
        </transition>
      </span>
      <span class="img-area">
        <img class="content-img" :src='src'>
      </span>
      <transition name="transition-shadow">
        <span class="shadow" v-if="show"></span>
      </transition>
    </router-link>
  </span>
</template>

<script>
export default {
  props: {
    'to': {
      type: String,
      default: '#'
    },
    'src': {
      type: String,
      default: '#'
    }
  },
  data() {
    return {
      show:false
    }
  }
}
</script>

<style scoped>
.text {
  display: inline-block;
  position: absolute;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  top: 43%;
  left: 43%;
  z-index: 100;
}
.content-tag-area {
  position: relative;
  display: inline-block;
  width: 400px;
  height: 250px;
}
.content-img {
  width: 400px;
  height: 100%;
}
.img-area {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.shadow {
  display: inline-block;
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  opacity: 0.5;
}
.transition-text-shown-enter-active,
.transition-text-shown-leave-active {
  transition: all 0.3s ease-in;
}
.transition-text-shown-enter-from,
.transition-text-shown-leave-to {
  opacity:0;
  transform: translateY(-30px);
}
.transition-text-hidden-enter-active,
.transition-text-hidden-leave-active {
  transition: all 0.3s ease-in;
}
.transition-text-hidden-enter-from,
.transition-text-hidden-leave-to {
  opacity:0;
  transform: translateY(30px);
}
.transition-shadow-enter-active,
.transition-shadow-leave-active {
  transition: all 0.3s ease-in;
}
.transition-shadow-enter-from,
.transition-shadow-leave-to {
  opacity: 0;
}
</style>