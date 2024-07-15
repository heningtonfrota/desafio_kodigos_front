<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title-subtitle">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
  </div>
</template>

<style scoped>
.title-subtitle {
  text-align: center;
  margin: 20px 0;
}

.title {
  text-align: left;
  font: normal normal bold 15px/17px Helvetica;
  letter-spacing: 0px;
  color: #707070;
}

.subtitle {
  text-align: left;
  font: normal normal normal 12px/14px Helvetica;
  letter-spacing: 0px;
  color: #939393;
  margin-top: 10px;
  margin-left: 5px;
}
</style>
  