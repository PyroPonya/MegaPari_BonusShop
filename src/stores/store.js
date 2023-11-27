import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('Store', () => {
  const loginPlaceholder = ref({
    login: 'login',
    password: 'password',
    try_login: '',
    try_password: '',
  });
  const data = ref([]);

  return { loginPlaceholder, data };
});
