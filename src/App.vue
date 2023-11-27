<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/store';
const store = useGlobalStore();
const login = store.loginPlaceholder.try_login;
const password = store.loginPlaceholder.try_password;
</script>

<template>
  <div
    v-if="
      store.loginPlaceholder.try_login == store.loginPlaceholder.login &&
      store.loginPlaceholder.try_password == store.loginPlaceholder.password
    "
    class="app_container"
  >
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
  </div>
  <div v-else class="app_container app_container-login">
    <LoginComponent />
  </div>
</template>

<style scoped>
.app_container {
  height: 100vh;
  max-width: 1440px;
  width: 100%;
}
.app_container-login {
  max-width: unset;
}
</style>
