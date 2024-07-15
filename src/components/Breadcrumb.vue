<script setup>
import IconHome from './icons/IconHome.vue';

const props = defineProps({
  crumbs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <nav class="breadcrumb">
    <ul>
      <li 
        v-for="(crumb, index) in crumbs" 
        :key="index" 
        :class="{ active: index === crumbs.length - 1 }"
      >
        <router-link v-if="index !== crumbs.length - 1" :to="crumb.path">
          <IconHome v-if="crumb.path === '/'" :define="{ width: 18, height: 18, color: '#E4E4E4' }" />
          <span v-else>{{ crumb.name }}</span>
        </router-link>
        <span v-else>{{ crumb.name }}</span>
      </li>
    </ul>
  </nav>
</template>
  

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.breadcrumb li {
  margin-right: 5px;
}

.breadcrumb li:not(.active)::after {
  content: '>';
  margin-left: 5px;
}

.breadcrumb li a {
  text-decoration: none;
  color: #939393;
}

.breadcrumb li a:hover {
  text-decoration: underline;
}

.breadcrumb li.active span {
  color: #555;
}
</style>
  