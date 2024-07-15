<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'success', 'danger', 'warning'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button 
    :class="['custom-button', type]" 
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<style scoped>
.custom-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.custom-button.primary {
  background-color: #189FE3;
  color: white;
}

.custom-button.secondary {
  background-color: #6c757d;
  color: white;
}

.custom-button.success {
  background-color: #28a745;
  color: white;
}

.custom-button.danger {
  background-color: #dc3545;
  color: white;
}

.custom-button.warning {
  background-color: #ffc107;
  color: black;
}

.custom-button:disabled {
  background-color: #e0e0e0;
  color: #a0a0a0;
  cursor: not-allowed;
}
</style>
