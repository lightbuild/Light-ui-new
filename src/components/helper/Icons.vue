<template>
  <component :is="content"/>
</template>

<script setup lang="ts">
  import {ref,shallowRef} from 'vue';
  
  const content = shallowRef(null);
  const props = defineProps({
    svgName: String,
  });
  const modules = import.meta.glob('../../assets/svg/*.svg');
  const x = '../../assets/svg/' + props.svgName;
  for (const path in modules) {
    if (path === x) {
      modules[path]().then((mod) => {
        content.value = mod.default;
      });
    }
    
  }
</script>