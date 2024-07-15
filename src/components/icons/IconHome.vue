<script setup>
const props = defineProps({
  define: {
    type: Object,
    default: () => ({
      width: 24,
      height: 24,
      color: '#fff'
    })
  }
})
</script>

<template>
  <svg id="baseline-home-24px" xmlns="http://www.w3.org/2000/svg" :width="props.define.width" :height="props.define.height" viewBox="0 0 24 24">
    <path id="Caminho_23" data-name="Caminho 23" d="M10,20V14h4v6h5V12h3L12,3,2,12H5v8Z" :fill="props.define.color"/>
    <path id="Caminho_24" data-name="Caminho 24" d="M0,0H24V24H0Z" fill="none"/>
  </svg>
</template>
