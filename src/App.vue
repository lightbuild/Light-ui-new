<template>
  <router-view/>
</template>

<script setup lang="ts">
  import {provide, ref} from 'vue';
  import {router} from "./router/router"
  
  const width = document.documentElement.clientWidth;
  const meneVisible = ref(width> 500);
  provide('menuVisible', meneVisible);
  router.afterEach(() =>{
      if (width < 500) {
        meneVisible.value = false;
      }
  })
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
