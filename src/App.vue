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
// id: 67ff0740-988a-4679-bccb-9a7036d8415e

const getData = () => {
  fetch(
    'https://getpantry.cloud/apiv1/pantry/67ff0740-988a-4679-bccb-9a7036d8415e/basket/MPShop'
  )
    .then((response) => response.text())
    .then((response) => {
      const data = JSON.parse(response);
      console.log(data);
      store.data = data;
      // console.log('response: ', JSON.parse(response));
      console.log('response: SUCCESSFUL');
    })
    .catch((err) => console.log(err));
  // console.log(store.data);
  return true;
};
// @TODO: pulls data from remote
getData();
</script>

<template>
  <div v-if="true" class="app_container">
    <!-- @TODO: REVERSE THIS AFTER DONE WITH MAIN PAGE -->
    <!-- <div
    v-if="
      store.loginPlaceholder.try_login == store.loginPlaceholder.login &&
      store.loginPlaceholder.try_password == store.loginPlaceholder.password
    "
    class="app_container"
  > -->
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
