<script setup>
import IconExit from '@/components/icons/IconExit.vue';
import IconNotifications from '@/components/icons/IconNotifications.vue';
</script>

<template>
  <div class="action-bar">
    <div class="left">
      <img src="@/assets/logo_kodigos.png" alt="Logo" class="logo">
    </div>
    <div class="right">
      <div class="icons">
        <IconNotifications />
      </div>

      <span class="text">Administrador</span>
      
      <div class="icons">
        <IconExit />
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.left .logo {
  height: 40px;
}

.right {
  display: flex;
  align-items: center;
  margin-right: 85px;
}

.text {
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  color: #333;
}

.icons {
  display: flex;
  gap: 10px;
}

.icons svg {
  width: 20px;
  height: 20px;
  cursor: pointer;
  fill: #333;
}

.icons svg:hover {
  fill: #007BFF;
}
</style>
  