<script setup>
const props = defineProps({
  prefix: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="prefix-input">
    <span class="prefix">{{ prefix }}</span>
    <input 
      type="text" 
      :value="value" 
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)" 
    />
  </div>
</template>

<style scoped>
.prefix-input {
  display: flex;
  align-items: center;
  border: 1px solid #CCCCCC;
  border-radius: 6px;
  padding: 15px;
}

.prefix {
  margin-left: 5px;
  margin-right: 10px;
  color: #707070;
}

input {
  border: none;
  outline: none;
}
</style>
  