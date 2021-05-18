<template>
  <div class="container">
    <div class="heading">
      <div class="left-heading">
        <ul class="list">
          <li class="tag" v-for="(text,index) in texts" :key="index" :class="{selected:$store.state.index==index}" @click="$store.commit('move',index)"></li>
        </ul>
      </div>
      <div class="right-heading">
      </div>
    </div>
    <div class="header-photo-switch-area">
      <div class="header-photo-switch switch-left" @click="switchToLeft()" :style="styleButtonLeft"><span class="icon-left"></span></div>
      <div class="header-photo-switch switch-right" @click="switchToRight()" :style="styleButtonRight"><span class="icon-right"></span></div>
    </div>
    <div class="header-photo-garary" :style="styleHeaderPhotos">
      <div class="header-photo-area">
        <div class="header-photo photo-0"><span class="shadow"></span></div>
      </div>
      <div class="header-photo-area">
        <div class="header-photo photo-1"><span class="shadow"></span></div>
      </div>
      <div class="header-photo-area">
        <div class="header-photo photo-2"><span class="shadow"></span></div>
      </div>
      <div class="header-photo-area">
        <div class="header-photo photo-3"><span class="shadow"></span></div>
      </div>
      <div class="header-photo-area">
        <div class="header-photo photo-4"><span class="shadow"></span></div>
      </div>
    </div>
    <div class="photos">
      <select v-model="selected" class="options">
        <option v-for="option in photo_items" :value="option" :key="option.text">
          {{option.text}}
        </option>
      </select>
      <photo-content :text="selected.text" :to="selected.to" :url="selected.url"></photo-content>
    </div>
    <my-button to="/project">more</my-button>
  </div>
</template>

<script>
//import headingTag from '../components/heading-tag.vue'
import photoContent from '../components/photo-content.vue'
import myButton from '../components/button.vue'
export default {
    data() {
      return {
        selected_heading: {
          title: "DEFAULT",
          to: "#"
        },
        selected: {
          text: "Indulge in flowers",
          to: "/project/1000",
          url: require('../assets/flowers.jpeg')
        },
        photo_items: [
          {
            text: "Indulge in flowers",
            to: "/project/1000",
            url: require('../assets/flowers.jpeg')
          },
          {
            text: "Moon in your hands",
            to: "/project/970",
            url: require("../assets/moon.jpeg")
          },
          {
            text: "One meeting, one opportunity",
            to: "/project/931",
            url: require("../assets/lightup.jpeg")
          },
          {
            text: 'Takuro Kuwata exh "Day After Day"',
            to: "/project/891",
            url: require("../assets/forest.jpeg")
          },
          {
            text: "call:",
            to: "/project/799",
            url: require("../assets/garden.jpeg")
          }
        ],
        texts: [
          "春",
          "夏",
          "秋(夜)",
          "秋(昼)",
          "冬"
        ],
        index: 0,
        styleHeaderPhotos: {
          left: 0 + "px",
          transition: "all " + 0.5 +"s " + "linear"
        },
        styleButtonLeft: {
          opacity: 0.5
        },
        styleButtonRight: {
          opacity: 1
        }
      }
    },
    methods: {
    goProject () {
      this.$router.push({ path: 'project' });
    },
    switchToRight() {
      if (this.index === 2) return;
      else {
        if(this.index === 0){
          this.styleButtonLeft.opacity = 1;
          this.styleHeaderPhotos.left = -400 + "px";
        }else if(this.index === 1){
          this.styleButtonRight.opacity = 0.5;
          this.styleHeaderPhotos.transition = "all " + 0.2 + "s " + "linear";
          this.styleHeaderPhotos.left = -560 + "px";
        }
        this.index += 1;
      }
    },
    switchToLeft() {
      if (this.index === 0) return;
      else if (this.index === 1) {
        this.styleButtonLeft.opacity = 0.5;
        this.styleHeaderPhotos.transition = "all " + 0.5 + "s " + "linear";
        this.styleHeaderPhotos.left = 0 + "px";
        this.index -= 1;
      } else if (this.index === 2) {
        this.styleButtonRight.opacity = 1;
        this.styleHeaderPhotos.left = -400 + "px";
        this.index -= 1;
      }
    }
  },
  components: {
    photoContent,
    myButton
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 30px auto;
  height: 1500px;
  font-family: 'mincho';
  overflow: hidden;
  position: relative;
}
.header-photo-switch-area {
  position: absolute;
  top: 100px;
  right: 10px;
  height: 30px;
  width: 80px;
  background-color: rgba(0,0,0,0.1);
  z-index: 100000000000000;
}
.header-photo-switch {
  float: left;
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
}
.switch-left {
  margin-right: 20px;
}
.icon-left {
  position: absolute;
  display: block;
  left: 10px;
  top: 5px;
  width: 15px;
  height: 15px;
  border-top: 5px solid black;
  border-right: 5px solid black;
  -webkit-transform: rotate(45deg);
  transform: rotate(-135deg);
}
.icon-right {
  position: absolute;
  display: block;
  left: 0;
  top: 5px;
  width: 15px;
  height: 15px;
  border-top: 5px solid black;
  border-right: 5px solid black;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.header-photo-garary {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 5000px;
  height: 300px;
  position: absolute;
}
.header-photo-area {
  height: 300px;
  width: 400px;
  float: left;
  position: relative;
  transition: all 0.3s ease-in;
  overflow: hidden;
}
.header-photo {
  height: 280px;
  width: 380px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-size: cover;
  transition: all 0.3s ease-in;
}
.header-photo:hover {
  height: 110%;
  width: 110%;
  top: -5%;
  left: -5%;
  right: 5%;
  bottom: 5%;
}
.shadow {
  position:absolute;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in;
}
.header-photo:hover .shadow {
  background-color: rgba(0,0,0,0.5);
}
.photo-0 {
  background-image: url("../assets/flowers.jpeg");
}
.photo-1 {
  background-image: url("../assets/moon.jpeg");
}
.photo-2 {
  background-image: url("../assets/lightup.jpeg");
}
.photo-3 {
  background-image: url("../assets/forest.jpeg");
}
.photo-4 {
  background-image: url("../assets/garden.jpeg");
}
.list {
  list-style: none;
  float: left;
  font-family: 'mincho';
  font-size: 20px;
}
.tag {
  float: left;
  padding-right: 20px;
  transition: all 0.5s ease-in;
}
.heading {
  padding:20px 100px;
}
.heading-tag{
  display: inline-block;
  text-decoration: none;
  color:black;
  padding-right: 50px;
  font-size: 20px;
  font-family: 'mincho';
}
.tag {
  opacity: 0.5;
  color: black;
}
.right-heading {
  float: right;
  width: 200px;
  font-size: 30px;
  position: relative;
  font-family: 'mincho';
}
.photos {
  padding-top: 250px;
  padding-bottom: 80px;
  top: 500px;
}
.options {
  margin-left: 100px;
  margin-bottom: 200px;
}
.description {
  position: absolute;
  top: 0;
}
.header-btn {
  margin-right: 20px;
}
.selected {
  color: blue;
}
.tag:hover {
  opacity: 1;
}
.transition-text-enter-active,
.transition-text-leave-active {
  transition: all 0.5s ease-in;
}
.transition-text-enter-from {
  transform: translateY(50px);
  opacity: 0;
}
.transition-text-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>