<template>
  <div class="topnav">
      <Icons class="logo" svg-name="geo.svg"/>
      <Icons svg-name="github.svg"/>
    <ul class="menu">
      <li>文档</li>
      <li>组件</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu">Menu</span>
  </div>
</template>

<script setup lang="ts">
  import {inject, Ref} from 'vue';
  import Icons from "./helper/Icons.vue"

  let menuVisible = inject<Ref<boolean>>('menuVisible');
  const toggleMenu = ()=>{
    menuVisible!.value = !menuVisible!.value;
  }
  
</script>

<style lang="scss" scoped>
  .topnav {
    display: flex;
    padding: 16px;
    position: relative;
    justify-content: center;
    align-items: center;
    > .logo {
      width:2em;
      height: 2em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
    > .toggleAside{
      display: none;
    }
    @media (max-width: 500px) {
      > .menu{display: none;}
      > .logo{margin:0 auto}
      > .toggleAside{
        display: inline-block;
        width: 24px;
        height: 24px;
        background:red;
        position: absolute;
        left:16px;
        top:50%;
        transform: translateY(-50%);
      }
    }
  }
</style>