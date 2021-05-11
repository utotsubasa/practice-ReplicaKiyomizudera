<template>
  <div class="galary" v-on:mouseover="show=false" v-on:mouseleave="show=true">
    <router-link :to="to">
      <transition name="transition-shadow">
        <span class="shadow" v-if="!show"> </span>
      </transition>
      <span class="text-area">
        <transition name="transition-shown">
          <span class="text shown" v-if="show">{{text}}</span>
        </transition>
      </span>
      <span class="img-area">
        <transition name="transition-hidden">
          <span class="text hidden" v-if="!show">{{text}}</span>
        </transition>
          <img class="photo" :src="url">
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    'to': {
      type: String,
      default: '#'
    },
    'text': {
      type: String,
      default: "default text"
    },
    'url': {
      type: String,
      defafult: '#'
    }
  },
  data () {
    return {
      show:true
    }
  },
  computed: {
    calc_url() {
      return require(this.url)
    }
  }
}
</script>

<style scoped>
.shadow {
  position: absolute;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  right: 100%;
  opacity: 0.3;
  background-color: black;
}
.galary {
  height: 600px;
  display: block;
  margin-bottom: 5px;
  transform-style: preserve-3d;
  cursor: pointer;
}
/*
.galary:hover .shadow{
  left: 0;
  width: 100%;
  background-color: black;
  opacity:0.5;
}
*/
.text-area {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 30%;
}
.shown {
  position: absolute;
  top: 10%;
  left: 100px;
  color: black;
}
.hidden {
  position: absolute;
  top: 40%;
  left: 40%;
  color: white;
  font-size: 30px;
  font-weight: bold;
}
.photo {
  float: right;
  height: 100%;
  width: 70%;
}
.transition-shown-enter-active,
.transition-shown-leave-active {
  transition: all 0.5s ease-in;
}
.transition-shown-enter-to,
.transition-shown-leave-from {
  opacity:1;
}
.transition-shown-enter-from,
.transition-shown-leave-to {
  opacity:0;
  transform: translateX(-50px);
  color: white;
}
.transition-hidden-enter-active,
.transition-hidden-leave-active {
  transition: all 0.5s ease-in;
}
.transition-hidden-enter-to,
.transition-hidden-leave-from {
  opacity:1;
}
.transition-hidden-enter-from,
.transition-hidden-leave-to {
  opacity:0;
  color: black;
}

.transition-shadow-enter-active,
.transition-shadow-leave-active {
  transition: all 0.3s linear;
}
.transition-shadow-enter-from,
.transition-shadow-leave-to {
  left: 30%;
  width: 70%;
}
</style>