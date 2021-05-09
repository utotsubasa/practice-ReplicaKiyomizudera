<template>
  <ul class="list">
    <li v-for="item in items" :key="item" class="tag">
      <slot :item="item" class="slot"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "PROJECT",
          to: "/project"
        },
        {
          title: "ABOUT",
          to: "/about"
        },
        {
          title: "INFOMATION",
          to: "/info"
        },
        {
          title: "TABLOID",
          to: "/tabloid"
        }
      ]
    }
  }
}
</script>

<style scoped>
.list {
  list-style: none;
  float: left;
}
.tag {
  float: right;
}
.heading-tag:hover {
  color:gray;
  cursor: pointer;
}
.heading-tag{
  display: inline-block;
  text-decoration: none;
  color:black;
  padding-right: 50px;
  font-size: 10px;
  transition: all 0.5s ease-in;
}
</style>