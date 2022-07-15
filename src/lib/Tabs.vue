<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults" :key="index" :is="c"/>
  </div>
</template>

<script setup lang="ts">
  import Tab from "./Tab.vue"
  import {useSlots} from 'vue';
  
  const slots = useSlots()
  const defaults = slots.default()
  defaults.forEach(tab =>{
    if(tab.type !== Tab){
      throw new Error('Tabs 的子标签必须是 Tab组件')
    }
  })
  const titles = defaults.map(tab =>{
    return tab.props.title
  })
</script>