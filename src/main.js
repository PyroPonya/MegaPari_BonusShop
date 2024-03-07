import './assets/main.css';
import './assets/reset.css';
import 'primevue/resources/themes/aura-light-blue/theme.css';

import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

const app = createApp(App);
const pinia = createPinia();

if (localStorage.getItem('state')) {
  pinia.state.value = JSON.parse(localStorage.getItem('state'));
}
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('state', JSON.stringify(state));
  },
  { deep: true }
);
app.use(pinia);
app.use(router);
app.use(PrimeVue);

app.mount('#app');
