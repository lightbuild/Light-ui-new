<template>
  <div :size="xxx">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script setup lang="ts">
  import {useAttrs} from 'vue';
  
  const attrs = useAttrs();
  const {size, ...rest} = attrs;
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