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
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.custom-button.primary {
  border: 1px solid #189FE3;
  background-color: white;
  color: #189FE3;
}

.custom-button.secondary {
  border: 1px solid #707070;
  background-color: white;
  color: #707070;
}

.custom-button.success {
  background-color: white;
  color: white;
}

.custom-button.danger {
  background-color: white;
  color: white;
}

.custom-button.warning {
  background-color: white;
  color: black;
}

.custom-button:disabled {
  background-color: white;
  color: #a0a0a0;
  cursor: not-allowed;
}
</style>
