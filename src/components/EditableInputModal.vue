<script setup>
import { ref } from 'vue';
import axios from '@/plugins/axios'; // importe o Axios diretamente aqui, ajuste conforme necessário

const props = defineProps({
  initialValue: {
    type: String,
    required: true
  },
  item: {
    type: Object,
    required: true
  },
  endpoint: {
    type: String,
    required: true
  }
});

const editedValue = ref(props.item[props.item.col].value);

const saveValue = () => {
  axios.put(props.endpoint, { value: editedValue.value, item: props.item })
    .then(response => {
      console.log('Valor atualizado no backend:', response.data);
      emit('close');
    })
    .catch(error => {
      console.error('Erro ao atualizar valor no backend:', error);
    });
};
</script>

<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal-content" @click.stop>
      <h2>Editar Valor</h2>
      <input v-model="editedValue" @keyup.enter="saveValue">
      <button @click="saveValue">Salvar</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
