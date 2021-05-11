<template>
  <div class="container">
    <div class="abouts">
      <div class="about-heading">About</div>
      <div class="about-text en">
        Praying is more than just the act of joining your hands together. Prayers embrace feelings of gratitude for peaceful daily lives and embody neighborly care. Listening to the voice of nature with finely-honed senses is also one form of prayer. Reflecting on yourself and entering a state of nonattachment―these series of acts are the exact embodiment of prayer.
      </div>
      <div class="about-text ja">
        手を合わせる行為だけが祈りではありません。日々への感謝、隣り合う人への気遣い、五感を研ぎ澄まして自然の声を聞くこと。想いをめぐらせ、自己に向き合い、無心へと近づいていく行為そのものが祈りのかたちです。
      </div>
      <my-button to="/project">more</my-button>
    </div>
    <div class="contents">
      <div class="contents-heading">Contents</div>
      <div class="content-tags">
        <content-tag to="/project" :src="require('../assets/tabloid.jpg')" class="tabloid">
          <template v-slot:title>
            tabloid
          </template>
        </content-tag>
        <content-tag to="/info" :src="require('../assets/info.jpeg')" class="info">
          <template v-slot:title>
            info
          </template>
        </content-tag>
      </div>
    </div>
  </div>
</template>

<script>
import myButton from '../components/button.vue'
import contentTag from '../components/content-tag.vue'
export default {
  components: {
    myButton,
    contentTag
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  background-color: ghostwhite;
  height: 850px;
  font-family: 'mincho';
}
.about-heading {
  font-weight: 500;
  font-size: 20px;
  padding-left: 200px;
}
.about-text {
  font-size: 12px;
  text-align: left;
  width: 600px;
  margin: 50px auto;
}
.btn {
  margin: 50px 200px;
}
.more {
  float: right;
  background-color: ghostwhite;
  padding: 20px 100px;
}
.contents-heading {
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  padding-left: 200px;
  padding-bottom: 100px;
}
.contents {
  padding-top: 100px;
}
.content-img {
  width: 400px;
}
.content-tags {
  position: relative;
}
.tabloid {
  left: 200px;
}
.info {
  right: -400px;
}
</style>