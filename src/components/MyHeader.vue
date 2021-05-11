<template>
  <div class="container">
    <span class="top-btn-area">
        <sapn class="prev" v-on:click="$store.commit('prev')"></sapn>
        <span class="next" v-on:click="$store.commit('next')"></span>
        <span class="down" v-on:click="down"></span>
    </span>
    <transition name="transition-title">
    <div class="title-area" :style="{color: $store.getters.returnColor}">
      <h1 class="header-title">FEEL_KIYOMIZUDERA</h1>
      <p>
        From now on, Kiyomizu-dera will seek ...
      </p>
    </div>
    </transition>
    <div id="slides">
      <div v-for="(url,index) in urls" :key="index">
        <transition name="transition-slide">
          <div class="slide" v-if="$store.state.index==index" :style="{backgroundImage:url}"></div>
        </transition>
      </div>
    </div>
    <div class="ref-area">
      <transition name="transition-ref">
        <a href="#" class="ref">{{$store.state.index}} ------></a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "black",
      urls: [
        'url('+'http://www.imamiya.jp/haruhanakyoko/info/kiyomizu00trin.jpg'+')',
        'url('+'https://upload.wikimedia.org/wikipedia/commons/3/35/Kiyomizu_Temple_-_01.jpg'+')',
        'url('+'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kiyomizu-dera-2a.jpg'+')',
        'url('+'https://upload.wikimedia.org/wikipedia/commons/4/42/Kiyomizu-dera_in_Kyoto-r.jpg'+')',
        'url('+'http://kyotomoyou.jp/sys/wp-content/uploads/2015/01/kiyomizudera-yuki-201501.jpg'+')'
      ]
    }
  },
  mounted() {    
    /*
    setInterval(() => {
      this.$store.commit('next') //うまくいかないのなんで
    }, 5000)
    */
    this.$store.dispatch('slide')
  },
  computed: {
    returnText() {
      if (this.$store.state.index === 0) {
        return "day"
      } else if (this.$store.state.index === 1) {
        return "night"
      } else {
        return "hoge"
      }
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
  transition: all 0.1s ease-in;
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
  transition: all 0.1s ease-in;
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
  transition: all 0.1s ease-in;
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
/*
.slide-0 {
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/35/Kiyomizu_Temple_-_01.jpg");
}
*/
.slide-0 {
  background-image: url("../assets/tabloid.jpg");
}
.header-title {
  position: absolute;
  font-size: 50px;
  width: 30px;
  top: 100px;
  left: 150px;
  z-index: 100;
  font-family: 'mincho';
}
p {
  position: absolute;
  top: 200px;
  left: 150px;
  z-index: 100;
  font-family: 'mincho';
}
.transition-slide-enter-active,
.transition-slide-leave-active {
  transition: all 0.5s ease-in;
}
.transition-slide-enter-from,
.transition-slide-leave-to {
  opacity: 0;
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