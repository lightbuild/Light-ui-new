<template>
    <button class="light-button" :class="{[`theme-${theme}`]:theme}">
      <slot/>
    </button>
</template>

<script setup lang="ts">
  defineProps({
    theme:{
      type:String,
      default:'button'
    }
  })
</script>
<script lang="ts">
  export default {
    inheritAttrs: false,
  };
</script>

<style lang="scss" scoped>
  div{
    border:1px solid red;
  }
</style>