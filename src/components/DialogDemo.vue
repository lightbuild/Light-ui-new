<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="false" :ok="ok" :cancel="cancel"></Dialog>
</template>

<script setup lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {ref} from 'vue';
  
  const visible = ref(false);
  
  const toggle = () => {
    visible.value = !visible.value;
  };
  const ok = () => {
    console.log('ok');
    return false;
  };
  const cancel = () => {
    console.log('cancel');
  };

</script>

<style lang="scss" scoped>

</style>