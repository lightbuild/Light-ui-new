<template>
  <div class="light-tabs">
    <div class="light-tabs-nav">
      <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="light-tabs-content">
      <component v-for="(c,index) in defaults" :key="index" :is="c"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Tab from './Tab.vue';
  import {useSlots} from 'vue';
  
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