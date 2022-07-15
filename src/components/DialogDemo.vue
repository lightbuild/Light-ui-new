<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :close-on-click-overlay="false" :ok="ok" :cancel="cancel">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <strong>第一行内容</strong>
        <div>第二行内容</div>
      </template>
    </Dialog>
  </div>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script setup lang="ts">
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {openDialog} from '../lib/openDialog'
  import {ref,h} from 'vue';
  
  const visible = ref(false);
  
  const toggle = () => {
    visible.value = !visible.value;
  };
  const ok = () => {
    return false;
  };
  const cancel = () => {
  };
  const showDialog = () => {
    openDialog({
      title: h('strong', {}, '标题'),
      content: '你好',
      ok() {
        console.log('ok')
      },
      cancel() {
        console.log('cancel')
      }
    })
  }
</script>

<style lang="scss" scoped>

</style>