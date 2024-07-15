<script setup>
import { ref } from 'vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconNoteAdd from '@/components/icons/IconNoteAdd.vue';
import IconDescription from '@/components/icons/IconDescription.vue';
import IconCheck from '@/components/icons/IconCheck.vue';
import IconList from '@/components/icons/IconList.vue';
import IconFileCopy from '@/components/icons/IconFileCopy.vue';

const isHovered = ref(false);
const items = ref([
  { name: 'Home', icon: 'home' },
  { name: 'Adicionar', icon: 'add' },
  { name: 'Descrição', icon: 'description' },
  { name: 'Check', icon: 'check' },
  { name: 'Lista', icon: 'list' },
  { name: 'Copiar', icon: 'copy' },
]);
</script>

<template>
  <div class="sidebar" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="sidebar-item" v-for="item in items" :key="item.name">
      <div class="icon">
        <IconHome v-if="item.icon === 'home'"/>
        <IconNoteAdd v-if="item.icon === 'add'"/>
        <IconDescription v-if="item.icon === 'description'"/>
        <IconCheck v-if="item.icon === 'check'"/>
        <IconList v-if="item.icon === 'list'"/>
        <IconFileCopy v-if="item.icon === 'copy'"/>
      </div>

      <transition name="slide">
        <span v-if="isHovered" class="item-name">{{ item.name }}</span>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 60px;
  /* height: calc(100vh - 65px); */
  background: var(--unnamed-color-606062) 0% 0% no-repeat padding-box;
  background: #606062 0% 0% no-repeat padding-box;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;
  overflow: hidden;
}

.sidebar:hover {
  width: 200px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  cursor: pointer;
}

.icon {
  width: 40px;
  height: 40px;
  margin-left: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-name {
  margin-left: 10px;
  white-space: nowrap;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
  