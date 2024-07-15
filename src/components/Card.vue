<script setup>
const props = defineProps({
  disabled_header: {
    type: Boolean,
    default: () => false
  },
  disabled_footer: {
    type: Boolean,
    default: () => false
  }
})
</script>

<template>
  <div class="card">
    <div class="card-header" v-if="!props.disabled_header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="!props.disabled_footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
}

.card-header,
.card-footer {
  padding: 16px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e0e0e0;
}

.card-footer {
  border-top: 1px solid #e0e0e0;
  border-bottom: none;
}

.card-body {
  padding: 16px;
}
</style>
  