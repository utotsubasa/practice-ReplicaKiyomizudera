<template>
  <div class="container">
    <div id="heading">
      <div id="left-heading">
        <img :src="image">
        <ul id="list">
          <li>{{ something }}</li>
          <li>ABOUT</li>
          <li>INFOMATION</li>
          <li>TABLOID</li>
        </ul>
      </div>
      <div id="right-heading">
        The FEEL KIYOMIZUDERA project presents a new
perspective and a fresh interpretation of prayer
through a variety of experimental expressions beyond convention.
      </div>
    </div>
    <div id="photos">
      <Galary
        v-for="i in 5"
        :key="i"
        :text="text[i]"
      />
      <button class="btn more">more</button>
    </div>
  </div>
</template>

<script>
import image from 'image.png'

export default {
  data() {
    const text = ['a', 'b', 'c', 'd', 'e']

    return {
      image,
      text
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 100px auto;
  padding: 100px;
}
#heading {
  padding:150px 200px;
}
#list {
  list-style: none;
}
#list li {
  float: left;
  padding-right: 50px;
  font-size: 14px;
}
#right-heading {
  float: right;
  width: 200px;
  font-size: 10px;
}
.galary {
  padding-left: 200px;
  height: 300px;
}
.photo {
  float: right;
}
.more {
  float: right;
  margin: 50px 200px;
  padding: 20px 100px;
  background-color: white;
}
</style>