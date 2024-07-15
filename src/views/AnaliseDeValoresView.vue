<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import PrefixInput from '@/components/PrefixInput.vue';
import TitleSubtitle from '@/components/TitleSubtitle.vue';
import Divider from '@/components/Divider.vue';
import TableEditValues from '@/components/Tables/TableEditValues.vue';
import TableSelectedSuppliers from '@/components/Tables/TableSelectedSuppliers.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomButtonOutline from '@/components/CustomButtonOutline.vue';
import { ref } from 'vue';
import AutoSpace from '@/components/AutoSpace.vue';

const crumbs = ref([
  { name: 'Home', path: '/' },
  { name: 'Cotação', path: '/cotacao' },
  { name: 'Análise de Valores', path: '/cotacao/analise-de-valores' }
]);

const count_update = ref(0);
</script>

<template>
  <div class="body-component">
    <Breadcrumb :crumbs="crumbs" />

    <h1>Análise de Valores</h1>

    <div style="display: flex;">
      <PrefixInput class="mr-10" prefix="Código:" value="001" />
      <PrefixInput class="ml-10 mr-10" prefix="Descrição:" value="Lista de Expediente" />
      <PrefixInput class="ml-10" prefix="Tipo:" value="Material" />
    </div>

    <Divider direction="horizontal" thickness="0.1px" color="#E4E4E4" margin="20px 0" />
    
    <TitleSubtitle title="Editar Valores" subtitle="Informe os valores repassados pelos fornecedores" />
    
    <TableEditValues @update-suppliers-selected="count_update++"/>

    <Divider direction="horizontal" thickness="0.1px" color="#E4E4E4" margin="20px 0" />

    <TitleSubtitle title="Anexos" subtitle="Insira as coações enviadas" />

    <Divider direction="horizontal" thickness="0.1px" color="#E4E4E4" margin="20px 0" />

    <TitleSubtitle title="Fornecedores selecionados" subtitle="Vendedores escolhidos por item e análise de última compra" />

    <TableSelectedSuppliers :reload="count_update" />

    <Divider direction="horizontal" thickness="0.1px" color="#E4E4E4" margin="20px 0" />

    <div class="flex-btns">
      <AutoSpace />
      
      <CustomButtonOutline 
        class="mr-10"
        text="Cancelar" 
        type="secondary" 
        @click="handleClick"
      />

      <CustomButtonOutline 
        class="mr-10"
        text="Salvar Rascunho" 
        type="primary" 
        @click="handleClick"
      />

      <CustomButton 
        text="Finalizar" 
        type="primary" 
        @click="handleClick"
      />
    </div>
  </div>
</template>

<style scoped>
.flex-btns {
  display: flex;
  margin-bottom: 20px;
  margin-right: 40px;
}
.ml-10 { margin-left: 10px; }
.mr-10 { margin-right: 10px; }

.body-component {
  width: calc(100vw - 110px);
  margin-left: 30px;
}

h1 {
  color: var(--unnamed-color-000000);
  text-align: left;
  font: normal normal bold 20px/23px Helvetica;
  letter-spacing: 0px;
  margin: 20px 0px;
}
</style>
