<template>
  <div class="container" @mousemove="getCoordinate">
    <div class="top-header" :style="[styleTopHeader,{color:headerFontColor}]">
      <p>FEEL_KIYOMIZUDERA</p>
    </div>
    <div class="top-btn-area" @mousemove="showCursorArea=false" @mouseleave="showCursorArea=true">
        <div class="prev" v-on:click="clickLeft()"><span class="arrow arrow-left"></span></div>
        <div class="next" v-on:click="clickRight()"><span class="arrow arrow-right"></span></div>
    </div>
    <transition name="transition-title">
    <div class="title-area" :style="{color: fontColor}">
      <h1 class="header-title">FEEL_KIYOMIZUDERA</h1>
      <p class="header-subtitle">
        From now on, Kiyomizu-dera will seek ...
      </p>
    </div>
    </transition>
    <div id="slides">
      <div v-for="(url,id) in urls" :key="id">
        <transition name="transition-slide" mode="out-in">
          <div class="slide" v-if="id==index" :style="{backgroundImage:url}"></div>
        </transition>
      </div>
    </div>
    <div class="ref-area">
      <transition name="transition-ref">
        <a href="#" class="ref">{{index}} ------></a>
      </transition>
    </div>
    <div class="slider-btns-area" @mousemove="showCursorArea=false" @mouseleave="showCursorArea=true">
      <div class="slider-btn-area area0">
        <button class="slide-btn" v-if="index!=0" @click="switchTo(0)"></button>
        <span class="timer" v-if="index==0"></span>
      </div>
      <div class="slider-btn-area area1">
        <button class="slide-btn" v-if="index!=1" @click="switchTo(1)"></button>
        <span class="timer" v-if="index==1"></span>
      </div>
      <div class="slider-btn-area area2">
        <button class="slide-btn" v-if="index!=2" @click="switchTo(2)"></button>
        <span class="timer" v-if="index==2"></span>
      </div>
      <div class="slider-btn-area area3">
        <button class="slide-btn" v-if="index!=3" @click="switchTo(3)"></button>
        <span class="timer" v-if="index==3"></span>
      </div>
      <div class="slider-btn-area area4">
        <button class="slide-btn" v-if="index!=4" @click="switchTo(4)"></button>
        <span class="timer" v-if="index==4"></span>
      </div>
    </div>
    <div class="cursor-area" :style="styleCursor" v-if="showCursorArea"></div>
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
      ],
      index: 0,
      intervalId:0,
      scrolled: false,
      styleTopHeader: {
        backgroundColor: "rgba(255,255,255,0)"
      },
      styleCursor: {
        top: 0,
        left: 0,
        backgroundColor: "black",
        opacity: 1
      },
      cursorX: 0,
      cursorY: 0,
      showCursorArea: true
    }
  },
  created() {    
    /*
    setInterval(() => {
      this.$store.commit('next') //うまくいかないのなんで
    }, 5000)
    */
    this.intervalId=setInterval(() => {
      this.index = (this.index + 1)%5
    },5000)
    window.addEventListener("scroll",this.changeHeaderColor)
    window.addEventListener("scroll",this.getCoordinate)
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
    },
    fontColor() {
      if(this.index === 2) {
        return "white"
      } else {
        return "black"
      }
    },
    headerFontColor() {
      if(!this.scrolled && this.index === 2) {
        return "white"
      } else {
        return "black"
      }
    }
  },
  watch: {
    cursorX(val) {
      this.styleCursor.left = val -15 + "px";
      if(val<300) {
        this.styleCursor.backgroundColor = "red";
      } else if(val>1440-300) {
        this.styleCursor.backgroundColor = "blue";
      } else {
        this.styleCursor.backgroundColor = "yellow";
      }
    },
    cursorY(val) {
      this.styleCursor.top = val -15 + "px";
      if(val<750) {
        this.styleCursor.opacity = 1;
      } else {
        this.styleCursor.opacity = 0;
      }
    }
  },
  methods: {
    clickLeft() {
      this.index = (this.index -1 + 5)%5
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.index = (this.index + 1)%5
      },5000)
    },
    clickRight() {
      this.index = (this.index + 1)%5
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.index = (this.index + 1)%5
      },5000)
    },
    switchTo(num) {
      this.index=num
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => {
        this.index = (this.index + 1)%5
      },5000)
    },
    changeHeaderColor() {
      if (window.scrollY>10) {
        this.scrolled = true;
        this.styleTopHeader.backgroundColor = "white";
      } else {
        this.scrolled = false;
        this.styleTopHeader.backgroundColor = "rgba(255,255,255,0)";
      }
    },
    getCoordinate(event) {
      this.cursorY = event.clientY +window.scrollY;
      this.cursorX = event.clientX;
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
.top-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 100000000000;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
  font-family: "mincho";
  transition: all 0.3s ease-in;
}
.prev {
  position: absolute;
  display: inline-block;
  top: 48%;
  left: 20px;
  height: 60px;
  width: 60px;
  background-color: rgba(255,255,255,0);
  z-index: 1000000;
  border-radius: 50%;
  border: 10px solid black;
  opacity: 1;
  transition: all 0.1s ease-in;
}
.next {
  position: absolute;
  display: inline-block;
  top: 48%;
  right: 20px;
  height: 60px;
  width: 60px;
  background-color: rgba(255,255,255,0);
  z-index: 1000000;
  border-radius: 50%;
  border: 10px solid black;
  opacity: 1;
  transition: all 0.1s ease-in;
}
.arrow-right {
  width: 0;
  height: 0;
  top: 10px;
  left: 8px;
  border-left: 30px solid black;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  z-index: 100000000000;
  animation: rightArrow 0.5s infinite linear;
}
.arrow-left {
  width: 0;
  height: 0;
  top: 10px;
  right: 8px;
  border-right: 30px solid black;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  z-index: 100000000000;
  animation: leftArrow 0.5s infinite linear;
}
@keyframes rightArrow {
  60% {
    left: 30px;
  }
  100% {
    left: 30px;
  }
}
@keyframes leftArrow {
  60% {
    right: 30px;
  }
  100% {
    right: 30px;
  }
}
.prev:hover {
  opacity: 0.7;
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
#slides {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide {
  overflow: hidden;
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: all 1s ease-in;
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
.header-subtitle {
  position: absolute;
  top: 200px;
  left: 150px;
  z-index: 100;
  font-family: 'mincho';
}
.transition-slide-enter-active,
.transition-slide-leave-active {
  transition: all 0.5s linear;
}
.transition-slide-enter-from {
  left: 100%;
}
.transition-slide-enter-to {
  left: 0;
}
.transition-slide-leave-from {
  opacity: 1;
}
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
  width: 300px;
  height: 30px;
  z-index: 1000;
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
.cursor-area {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 100;
}
</style>