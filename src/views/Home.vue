<template>
  <div class="wrapper-container">
    <Topnav/>
    <div class="titleAndFeatures">
      <div class="title">
        <h1>Light UI for Vue3</h1>
        <h2> 没有错，我就是在重复造轮子</h2>
      </div>
      <div class="features">
        <div class="features-items">
          <Icons svg-name="lights.svg"/>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </div>
        <div class="features-items">
          <Icons svg-name="typescript.svg"/>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </div>
        <div class="features-items">
          <Icons svg-name="Vue.svg"/>
          <h3>基于Vue3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Topnav from '../components/Topnav.vue';
  import Icons from '../components/helper/Icons.vue';
</script>

<style lang="scss" scoped>
  @use "sass:math";
  
  .wrapper-container {
    background: linear-gradient(165deg, rgba(208, 238, 253, 1) 0%, rgba(239, 236, 226, 1) 100%);
    padding:0 50px;
    > .titleAndFeatures {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > .title {
        margin:50px;
      }
      
      > .features {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        > .features-items {
          border: 2px solid #7a7e7e;
          margin: 16px 0;
          border-right: none;
          border-bottom: none;
          border-top-left-radius: 15px;
          display: grid;
          justify-content: start;
          align-content: center;
          grid-template-areas:
              "icon title"
              "icon text";
          grid-template-columns: 80px auto;
          grid-template-rows: 1fr auto;
          
          >svg{
            grid-area: icon;
            padding:5px;
            width: 40px;
            height: 40px;
          }
          >h3{
            grid-area: title;
            font-size: 28他px;
          }
          >p{
            grid-area: text;
          }
        }
        > .features-items:nth-child(1){
          width:200px;
        }
        > .features-items:nth-child(2){
          width: 300px;
        }
        > .features-items:nth-child(3){
          width: 400px;
        }
      }
    }
  }


</style>