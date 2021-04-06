<template>
  <div class="container">
    <div id="abouts">
      <div id="about-heading">About</div>
      <div class="about-text en">
        Praying is more than just the act of joining your hands together. Prayers embrace feelings of gratitude for peaceful daily lives and embody neighborly care. Listening to the voice of nature with finely-honed senses is also one form of prayer. Reflecting on yourself and entering a state of nonattachment―these series of acts are the exact embodiment of prayer.
      </div>
      <div class="about-text ja">
        手を合わせる行為だけが祈りではありません。日々への感謝、隣り合う人への気遣い、五感を研ぎ澄まして自然の声を聞くこと。想いをめぐらせ、自己に向き合い、無心へと近づいていく行為そのものが祈りのかたちです。
      </div>
      <div class="btn">
        <button class="more">more</button>
      </div>
    </div>
    <div id="contents">
      <div id="contents-heading">Contents</div>
      <div id="tabloid">Tabloid</div>
      <div id="info">Infomation</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  padding: 100px;
  background-color: ghostwhite;
  height: 500px;
}
#abouts {
  margin: 50px;
}
#about-heading {
  font-weight: 600;
  font-size: 30px;
  padding-left: 200px;
}
.about-text {
  font-size: 12px;
  text-align: center;
  width: 400px;
  margin: 50px auto;
}
.btn {
  margin: 50px 100px;
}
.more {
  float: right;
  background-color: ghostwhite;
  padding: 20px 100px;
}
#contents-heading {
  font-weight: 600;
  font-size: 30px;
  padding-left: 200px;
}
</style>