<script setup>
import TopBar from '@/components/Layout/TopBar.vue';
import SideBar from '@/components/Layout/SideBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <TopBar />
    <main style="display: flex;">
      <SideBar />
      <RouterView />
    </main>
  </div>
</template>