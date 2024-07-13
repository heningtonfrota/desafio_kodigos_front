<script setup>
import IconAccountCicle from '../icons/IconAccountCicle.vue';
import IconLock from '../icons/IconLock.vue';
</script>

<template>
  <div class="login-form">
    <img src="@/assets/logo_kodigos.png" alt="Logo" class="logo">
    <form @submit.prevent="submitForm">
      <div>
        <div class="input-with-icon">
          <IconAccountCicle class="icon" />
          <input placeholder="Email" type="email" id="email" v-model="email" required>
        </div>
      </div>
      <div>
        <div class="input-with-icon">
          <IconLock class="icon" />
          <input placeholder="Senha" type="password" id="password" v-model="password" required>
        </div>
      </div>
      <button type="submit">Acessar</button>
    </form>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 0 auto;
}

.logo {
  width: 375px;
  margin-bottom: 80px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

form div {
  margin-bottom: 15px;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon .icon {
  position: absolute;
  right: 15px;
}

.input-with-icon input {
  padding: 8px 8px 8px 40px;
  width: 100%;
  box-sizing: border-box;
}

input {
  padding: 8px;
  width: 375px;
  height: 51px;
  box-sizing: border-box;
  border: 1px solid var(--unnamed-color-cccccc);
  border: 1px solid #CCCCCC;
  border-radius: 6px;
  text-align: left;
  font: normal normal normal 17px/43px Helvetica;
  letter-spacing: 0px;
  color: #989898;
}

button {
  padding: 10px;
  height: 51px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 7px;
}

button:hover {
  background-color: #189FE3;
}
</style>
