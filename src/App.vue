<template>
  <router-view/>
</template>

<script setup lang="ts">
  import {provide, ref} from 'vue';
  const width = document.documentElement.clientWidth;
  const meneVisible = ref(width> 500);
  provide('menuVisible', meneVisible);
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
