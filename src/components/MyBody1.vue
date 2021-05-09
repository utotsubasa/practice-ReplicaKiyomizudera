<template>
  <div class="container">
    <div class="heading">
      <div class="left-heading">
        <heading-tag>
          <template v-slot:default="slotProps">
            <router-link :to="slotProps.item.to"><span class="heading-tag">{{slotProps.item.title}}</span></router-link>
          </template>
        </heading-tag>
      </div>
      <div class="right-heading">
        The FEEL KIYOMIZUDERA project presents a new
perspective and a fresh interpretation of prayer
through a variety of experimental expressions beyond convention.
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
}
.heading {
  padding:50px 100px;
}
.heading-tag{
  display: inline-block;
  text-decoration: none;
  color:black;
  padding-right: 50px;
  font-size: 10px;
}
.right-heading {
  float: right;
  width: 200px;
  font-size: 10px;
}
.photos {
  padding-top: 150px;
  padding-bottom: 80px;
}
.options {
  margin-left: 100px;
  margin-bottom: 200px;
}
</style>