<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
</template>

<script setup lang="ts">
  import Button from "../lib/Button.vue"
  const onClick = () =>{
    console.log('hi');
  }
</script>

<style lang="scss" scoped>

</style>