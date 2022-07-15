<template>
  <button class="light-switch" @click="toggle" :class="{'light-checked':value}"><span></span></button>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  
  const props = defineProps({
    value: Boolean
  });
  const emit = defineEmits(['update:value']);
  const checked = ref(false);
  const toggle = () => {
    checked.value = !checked.value;
    emit('update:value', !props.value);
  };
</script>

<style lang="scss">
  @use "sass:math";
  
  $h: 22px;
  $h2: $h - 4px;
  .light-switch{
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: math.div($h, 2);
    position: relative;
  
    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: math.div($h, 2);
      transition: all 250ms;
    }
  
    &.light-checked {
      background: #1890ff;
    
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }
  
    &:focus {
      outline: none;
    }
  
    &:active {
      > span {
        width: $h2+4px
      }
    }
  
    &.light-checked:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
</style>