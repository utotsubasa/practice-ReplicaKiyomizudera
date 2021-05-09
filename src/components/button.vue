<template>
      <div class="btn-area">
    <router-link :to="to">
      <span class="btn-shadow"></span>
      <span class="btn-back"></span>
      <span class="btn-name">
        <slot>default</slot>
      </span>
    </router-link>
          </div>
</template>

<script>
export default {
  props: {
    'to': {
      type: String,
      default: '#'
    }
  }
}
</script>

<style scoped>
.btn-area {
  position: relative;
    width: 250px;
    color: white;
  height: 50px;
  transform-style: preserve-3d;
  cursor: pointer;
  border: 0.5px solid black;
  float:right;
  margin-right: 200px;
}
.btn-shadow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  display: inline-block;
  background-color: gray;
  transition: all 0.3s ease-in;
}
.btn-name {
  position: absolute;
  top: 25%;
  left: 42.5%;
  display:inline-block;
  text-align: center;
  vertical-align: middle;
  color:black;
}
.btn-area:hover .btn-shadow{
  width: 100%;
}
</style>