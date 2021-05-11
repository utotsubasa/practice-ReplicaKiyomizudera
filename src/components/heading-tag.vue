<template>
  <ul class="list">
    <li v-for="tag in tags" :key="tag.id" class='tag'>
      <span :class="[{selectedTag:$store.state.index==tag.id}]"><slot :tag="tag"></slot></span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          name:"夏",
          id:0
        },
        {
          name:"秋（夜）",
          id:1
        },
        {
          name:"秋（昼）",
          id:2
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
  float: left;
}
.selected-tag {
  opacity: 0.7;
  color: blue;
}
</style>