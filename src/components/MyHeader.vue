<template>
  <div class="container">
    <span class="top-btn-area">
        <sapn class="prev" v-on:click="clickLeft()"></sapn>
        <span class="next" v-on:click="$store.commit('next')"></span>
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
    <div class="slider-btns-area">
      <div class="slider-btn-area area0">
        <button class="slide-btn" v-if="$store.state.index!=0"></button>
        <span class="timer" v-if="$store.state.index==0"></span>
      </div>
      <div class="slider-btn-area area1">
        <button class="slide-btn" v-if="$store.state.index!=1"></button>
        <span class="timer" v-if="$store.state.index==1"></span>
      </div>
      <div class="slider-btn-area area2">
        <button class="slide-btn" v-if="$store.state.index!=2"></button>
        <span class="timer" v-if="$store.state.index==2"></span>
      </div>
      <div class="slider-btn-area area3">
        <button class="slide-btn" v-if="$store.state.index!=3"></button>
        <span class="timer" v-if="$store.state.index==3"></span>
      </div>
      <div class="slider-btn-area area4">
        <button class="slide-btn" v-if="$store.state.index!=4"></button>
        <span class="timer" v-if="$store.state.index==4"></span>
      </div>
    </div>
    <span class="slide-btn-area">
      <span class="btn-area">
        <button class="slide-btn btn-l" v-if="$store.state.index!=0">0</button>
        <span class="timer timer-l" v-if="$store.state.index==0"></span>
      </span>
      <span>
        <button class="slide-btn btn-m" v-if="$store.state.index!=1">1</button>
        <span class="timer timer-m" v-if="$store.state.index==1"></span>
      </span>
      <span>
        <button class="slide-btn btn-m" v-if="$store.state.index!=2">2</button>
        <span class="timer timer-m" v-if="$store.state.index==2"></span>
      </span>
      <span>
        <button class="slide-btn btn-m" v-if="$store.state.index!=3">3</button>
        <span class="timer timer-m" v-if="$store.state.index==3"></span>
      </span>
      <span>
        <button class="slide-btn btn-r" v-if="$store.state.index!=4">4</button>
        <span class="timer timer-r" v-if="$store.state.index==4"></span>
      </span>
    </span>
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
  created() {    
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
.slide-btn-area {
  bottom: 40px;
  display: inline-block;
  width: 300px;
  position: absolute;
  z-index: 1000000;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
}
.slider-btns-area {
  position: absolute;
  background-color: red;
  width: 300px;
  height: 30px;
  z-index: 1000000000;
  bottom: 40px;
  left: 50px;
}
.slider-btn-area {
  float: left;
  width: 20%;
  height: 100%;
  padding: 0 auto;
  position: relative;
}
.area0 {
  background-color: red;
}
.area1 {
  background-color: blue;
}
.area2 {
  background-color: yellow;
}
.area3 {
  background-color: green;
}
.area4 {
  background-color: pink;

}
.btn0-area {
  position: absolute;
  width: 20%;
}
.slide-btn {
  padding: 6px;
  color: white;
  border-radius: 50%;
  border: 0;
  color: black;
  float: left;
  position: absolute;
  cursor: pointer;
  top: 9px;
  left: 9px;
}
.btn0-area {
  position:relative;
  width: 50px;
}
.timer {
  padding: 17px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    transparent 50%,
    black 0
  );
  overflow: hidden;
}
.timer::before {
  content: "";
  display: block;
  margin-left: 0;
  height: 100%;
  width: 50%;
  top: 0;
  position: absolute;
      border-radius: 0 100% 100% 0 / 50%;
    background-color: inherit;
    transform-origin: left;
  animation: timer 5s linear;
}
@keyframes timer {
  0% {
    transform: rotate(0deg);
    background-color: white;
  }
  50% {
    transform: rotate(180deg);
    background-color: white;
  }
  50.001% {
    transform: rotate(0deg);
    background-color: black;
  }
  100% {
    transform: rotate(180deg);
    background-color: black;
  }
}
</style>