<template>
  <div class="container">
    <span class="top-btn-area">
        <sapn class="prev" v-on:click="prev"></sapn>
        <span class="next" v-on:click="next"></span>
        <span class="down" v-on:click="down"></span>
    </span>
    <transition name="transition-title">
    <div class="title-area" :style="{color: color}">
      <h1 class="header-title">FEEL_KIYOMIZUDERA</h1>
      <p>
        From now on, Kiyomizu-dera will seek ...
      </p>
    </div>
    </transition>
    <div id="slides">
      <transition name="transition-slide-0">
        <div class="slide slide-0" v-if="index==0"></div>
      </transition>
      <transition name="transition-slide-1">
        <div class="slide slide-1" v-if="index==1"></div>
      </transition>
    </div>
    <div class="ref-area">
      <transition name="transition-ref">
        <a href="#" class="ref">{{returnText}} ------></a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      color: "black"
    }
  },
  mounted() {    
    setInterval(() => {
      this.index = (this.index+1)%2
    }, 5000)
  },
  computed: {
    returnText() {
      if (this.index === 0) {
        return "day"
      } else if (this.index === 1) {
        return "night"
      } else {
        return "hoge"
      }
    }
  },
  watch: {
    index(newIndex) {
      if (newIndex === 0) {
        this.color = "black"
      } else if (newIndex === 1) {
        this.color = "white"
      } else {
        this.color = "red"
      }
    }
  },
  methods: {
    prev() {
      this.index = (this.index -1 +2) %2
    },
    next() {
      this.index = (this.index + 1) %2
    },
    down() {
      
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 0;
  height: 789px;
}
.prev {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30px;
  background-color: gray;
  z-index: 1000000;
  opacity: 0.3;
  transition: all 0.5s ease-in;
}
.prev:hover {
  opacity: 0.7;
}
.next {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 30px;
  background-color: gray;
  z-index: 1000000;
  opacity: 0.3;
  transition: all 0.5s ease-in;
}
.down {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 10%;
  left: 45%;
  background-color: gray;
  z-index: 1000000;
  opacity: 0.3;
  transition: all 0.5s ease-in;
}
.next:hover {
  opacity: 0.7;
}
.down:hover {
  opacity: 0.7;
}
.slide {
  overflow: hidden;
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
    background-size: cover;
}
.slide-0 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/35/Kiyomizu_Temple_-_01.jpg");
}
.slide-1 {
  background-image: url("../assets/tabloid.jpg");
}
.header-title {
  position: absolute;
  font-size: 50px;
  width: 30px;
  top: 100px;
  left: 150px;
  z-index: 100;
}
p {
  position: absolute;
  top: 200px;
  left: 150px;
  z-index: 100;
}
.transition-slide-0-enter-active,
.transition-slide-1-enter-active {
  transition: all 0.5s ease-in;
}
.transition-slide-0-enter-from,
.transition-slide-1-enter-from {
  left: 50%;
  opacity: 0;
}
.transition-slide-0-leave-active,
.transition-slide-1-leave-active {
  transition: all 0.5s ease-in;
}
.transition-slide-0-leave-to,
.transition-slide-1-leave-to {
  left: -50%;
  opacity:0;
}
.ref-area {
  position: absolute;
  z-index: 100;
  top: 90%;
  left: 90%;
}
.ref {
  color: white;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s ease-in;
}
.ref:hover {
  opacity: 0.7;
}
</style>