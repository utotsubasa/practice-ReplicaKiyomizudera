<template>
  <div class="container">
    <div id="heading">
      <div id="left-heading">
        <ul id="list">
          <li>PROJECT</li>
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
      <div class="galary">
        <div class="text shown">Indulging in flowers</div>
        <div class="text hidden"></div>
        <img class="photo" src="#">
      </div>
      <div class="galary">
        <div class="text shown">Moon in your hands</div>
        <div class="text hidden"></div>
        <img class="photo" src="#">
      </div>
      <div class="galary">
        <div class="text shown">One meeting, one oppotunity</div>
        <div class="text hidden"></div>
        <img class="photo" src="#">
      </div>
      <div class="galary">
        <div class="text shown">Takuro Kuwata exh "Day After Day"</div>
        <div class="text hidden"></div>
        <img class="photo" src="#">
      </div>
      <div class="galary">
        <div class="text shown">call:</div>
        <div class="text hidden"></div>
        <img class="photo" src="#">
      </div>
      <button class="btn more">more</button>
    </div>
  </div>
</template>

<script>
export default {
  
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