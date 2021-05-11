<template>
  <div class="container">
    <div class="heading">
      <div class="left-heading">
        <ul class="list">
          <li class="tag" v-for="(text,index) in texts" :key="index" :class="{selected:$store.state.index==index}" @click="$store.commit('move',index)">{{text}}</li>
        </ul>
      </div>
      <div class="right-heading">
        <span v-for="(text,index) in texts" :key="index" class="description">
          <transition name="transition-text">
            <p v-if="index==$store.state.index">{{text}}</p>
          </transition>
        </span>
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
import headingTag from '../components/heading-tag.vue'
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
        ]
      }
    },
    methods: {
    goProject () {
      this.$router.push({ path: 'project' });
    }
  },
  components: {
    headingTag,
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
  padding-top: 150px;
  padding-bottom: 80px;
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