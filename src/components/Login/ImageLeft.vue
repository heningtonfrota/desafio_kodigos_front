<script setup>
</script>

<template>
  <div class="gradient-image">
    <div class="bg-image">
      <span class="font-supply-chain">Supply Chain</span>
      <span class="font-management">Management</span>
    </div>    
  </div>
</template>

<style scoped>
.gradient-image {
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 50%;
  background: transparent linear-gradient(165deg, #6F6F6F 0%, #11111D 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
}

.bg-image {
  height: 100vh;
  width: 100%;
  background-image: url('../../assets/backgroud_login_1.png');
  background-image: transparent linear-gradient(165deg, #6F6F6F 0%, #11111D 100%) 0% 0% no-repeat padding-box;
  background-size: 200%;
  background-position: -623px -95px;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
}

.font-management {
  position: absolute;
  top: 353px;
  left: 263px;
  width: 261px;
  height: 77px;
  text-align: left;
  font: italic normal normal 63px/77px Brush Script MT;
  letter-spacing: 0px;
  color: #3395F7;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  z-index: 5;
}

.font-supply-chain {
  position: absolute;
  top: 320px;
  left: 138px;
  width: 339px;
  height: 58px;
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 58px/82px Acumin Pro;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}
</style>
