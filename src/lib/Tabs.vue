<template>
  <div class="light-tabs">
    <div class="light-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" @click="select(t)" :class="{selected: t=== selected}">{{ t }}</div>
    </div>
    <div class="light-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Tab from './Tab.vue';
  import {computed, useSlots} from 'vue';
  
  const props = defineProps({
    selected:{
      type:String,
    }
  })
  const emit = defineEmits(['update:selected'])
  
  const current = computed(() =>{
      return defaults.find(tab=>{
       return tab.props.title === props.selected
      })
  })
  
  const select = (title:string) =>{
      emit('update:selected',title)
  }
  const slots = useSlots();
  const defaults = slots.default();
  defaults.forEach(tab => {
    if (tab.type !== Tab) {
      throw new Error('Tabs 的子标签必须是 Tab组件');
    }
  });
  const titles = defaults.map(tab => {
    return tab.props.title;
  });
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .light-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }
    }
    &-content {
      padding: 8px 0;
    }
  }
</style>