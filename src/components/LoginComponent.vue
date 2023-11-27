<template>
  <div class="login_container">
    <img src="./icons/login_logo.svg" alt="logo" class="login_logo" />
    <div class="login_form">
      <div class="title">Почта</div>
      <input
        type="text"
        class="login_mail"
        placeholder="Введите свою почту"
        v-model="store.loginPlaceholder.try_login"
      />
      <div class="title">Пароль</div>
      <div class="login_password-container">
        <input
          :type="showPass ? 'text' : 'password'"
          class="login_password"
          placeholder="Введите свой пароль"
          v-model="store.loginPlaceholder.try_password"
        />
        <div class="inputType_toggle" @click="showPass = !showPass">
          <img v-if="showPass == false" src="./icons/eye.png" alt="" />
          <img v-else src="./icons/eye_no.svg" alt="" />
        </div>
      </div>
      <div class="login_btn">Войти</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
const store = useGlobalStore();
const storeRefs = storeToRefs(useGlobalStore());
const showPass = ref(false);
</script>

<style scoped>
.login_container {
  height: 100%;
  width: 100%;
  background-image: url('./icons/login_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 566px; */
  padding: 40px;
  gap: 24px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 32px -4px rgba(24, 39, 75, 0.1),
    0px 6px 14px -6px rgba(24, 39, 75, 0.12);
}
.title {
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  width: 100%;
  min-width: 486px;
}
input {
  display: flex;
  height: 46px;
  width: 100%;
  min-width: 100%;
  padding: 0px 16px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid #f1f1f1;
  background: #f9fafb;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
input:focus {
  border-radius: 16px;
  border: 1px solid #353535;
  background: #fff;
}
input::placeholder {
  color: #828282;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.login_password-container {
  width: 100%;
  position: relative;
}
.inputType_toggle {
  position: absolute;
  right: 16px;
  top: 13px;
  display: flex;
  cursor: pointer;
  /* height: 20px;
  width: 20px; */
}
.inputType_toggle img {
  height: 20px;
  width: 20px;
}
.login_btn {
  display: flex;
  height: 46px;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  background: #353535;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.login_btn:hover,
.login_btn:active {
  border-radius: 16px;
  background: #555353;
  cursor: pointer;
}
</style>
