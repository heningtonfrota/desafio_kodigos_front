<script setup>
import DataTable from '@/components/DataTable.vue';
import EditableInputModal from '@/components/EditableInputModal.vue';
import { ref, onMounted } from 'vue';
import axios from '@/plugins/axios';

const showModal = ref(false);
const valueFromBackend = ref(0);
const modalItem = ref({});

const emit = defineEmits(['update-suppliers-selected']);

const columns = ref([
  { key: 'cod', label: 'Código' },
  { key: 'product', label: 'Produto' },
  { key: 'description', label: 'Descrição' },
  { key: 'amount', label: 'Quantidade' }
]);
const rows = ref([
  { cod: 30, product: 'John Doe', description: 'john@example.com', amount: 50 },
  { cod: 25, product: 'Jane Smith', description: 'jane@example.com', amount: 50 },
  { cod: 35, product: 'Sam Green', description: 'sam@example.com', amount: 50 },
  { cod: 35, product: 'Sam Green', description: 'sam@example.com', amount: 50 },
  { cod: 35, product: 'Sam Green', description: 'sam@example.com', amount: 50 },
  { cod: 35, product: 'Sam Green', description: 'sam@example.com', amount: 50 },
  { cod: 35, product: 'Sam Green', description: 'sam@example.com', amount: 50 },
]);

function getData() {
  rows.value = [];
  axios.get('/values-table')
    .then(response => {
      const { data } = response;
      rows.value = data.values_table;
      columns.value = data.headers;
    })
    .catch(error => alert('Erro ao carregar dados da API:', error));
}

onMounted(() => getData());

function updateValue(item) {
  modalItem.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  getData();
  emit('update-suppliers-selected');
}

function updateIsWinner(item) {
  const params = {
    product_id: item.id,
    supplier_id: item[item.col].supplier_id,
    is_winner: !item[item.col].is_winner,
  }

  axios.put('/update-is-winner-supplier', params)
    .then(() => {
      getData();
      emit('update-suppliers-selected');
    })
    .catch(error => alert('Erro ao carregar dados da API:', error));
}
</script>

<template>
  <DataTable 
    :columns="columns" 
    :rows="rows" 
  >
    <template #item="{ item }">
      <td 
        v-for="col in columns.map(m=> m.key)" 
        class="custom-td"
        :class="{ 'background-color-active' : item[col].is_winner }"
      >
        <span v-if="['id','product_name','description','amount','is_winner'].includes(col)">
          {{ item[col] }}
        </span>

        <p v-else>
          <span @click="updateValue({ ...item, col: col })">R$ {{ item[col].value }}</span>

          <input 
            type="checkbox" 
            name="is_winner" 
            id="is_winner" 
            :checked="item[col].is_winner"
            @click="updateIsWinner({ ...item, col: col })"
          />
        </p>
      </td>
    </template>

  </DataTable>

  <EditableInputModal v-if="showModal" 
    :initialValue="valueFromBackend"
    :item="modalItem"
    endpoint="/update-value-supplier"
    @close="closeModal()"
  />
</template>

<style scoped>
.custom-td {
  height: 42px;
  padding: 0px 10px;
  text-align: center;
  border-bottom: 1px solid #848688;
  font: normal normal normal 14px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
}

.background-color-active {
  background-color: #848688;
} 

input {
  margin-left: 5px;
}
</style>