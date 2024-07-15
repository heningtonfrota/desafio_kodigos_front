<script setup>
import DataTable from '@/components/DataTable.vue';
import { ref, onMounted, watch } from 'vue';
import axios from '@/plugins/axios';

const props = defineProps(['reload']);

watch(() => props.reload, () => getData());

const columns = ref([
  { key: 'id', label: 'Código' },
  { key: 'product_name', label: 'Produto' },
  { key: 'description', label: 'Descrição' },
  { key: 'supplier_name', label: 'Fornecedor' },
  { key: 'amount', label: 'Quantidade' },
  { key: 'value', label: 'Valor' },
  { key: 'total', label: 'Total' },
]);
const rows = ref([]);

function getData() {
  rows.value = [];
  axios.get('/selected-suppliers')
    .then(response => rows.value = response.data.values_table)
    .catch(error => alert('Erro ao carregar dados da API:', error));
}

onMounted(() => getData());

</script>

<template>
  <DataTable :columns="columns" :rows="rows">
    <template #item="{ item }">
      <td v-for="col in columns.map(m=> m.key)" class="custom-td">
        <span v-if="['id','product_name','description','supplier_name'].includes(col)">
          {{ item[col] }}
        </span>

        <span v-else>R$ {{ item[col] }}</span>
      </td>
    </template>
  </DataTable>
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
</style>