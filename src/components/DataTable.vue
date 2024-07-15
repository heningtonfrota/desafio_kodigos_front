<script setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th 
            v-for="(column, index) in columns" 
            :key="column.index" 
            :class="{ 
              'border-radius-start': index == 0,
              'border-radius-end': index == (columns.length - 1)
            }"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <slot name="item" :item="row">
            <td v-for="column in columns" :key="column.key">
              <slot :name="`item.${column.key}`" :item="row[column.key]">
                {{ row[column.key] }}
              </slot>
            </td>
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.data-table {
  width: 100%;
  margin: 20px 0;
  overflow-x: auto;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  height: 42px;
  padding: 0px 10px;
  text-align: center;
  border-bottom: 1px solid #848688;
}

.data-table th {
  background-color: #606062;
  font: normal normal medium 12px/14px Helvetica Neue;
  letter-spacing: 0px;
  color: #FFFFFF;
}

.data-table td {
  font: normal normal normal 11px/12px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
}

.border-radius-start {
  border-end-start-radius: 5px;
  border-start-start-radius: 5px;
}

.border-radius-end {
  border-start-end-radius: 5px;
  border-end-end-radius: 5px;
}
</style>
  