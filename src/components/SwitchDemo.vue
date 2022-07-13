<template>
  <Switch v-model:value="bool" />
</template>

<script setup lang="ts">
  import Switch from '../lib/Switch.vue'
  import {ref} from 'vue';
  const bool = ref(false)
</script>

<style lang="scss" scoped>

</style>