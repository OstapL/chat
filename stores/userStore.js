import { defineStore } from 'pinia'

function getInitialLoginData() {
  return {
    cell: '',
    dob: {},
    email: '',
    gender: '',
    id: '',
    location: {},
    login: {},
    name: {},
    nat: '',
    phone: '',
    picture: {},
    registered: {},
  };
}
const loginData = reactive(getInitialLoginData());
const token = ref('');
const isUserLoaded = ref(false);

export const useUserStore = defineStore('userStore', () => {

  const setToken = (data) => (token.value = data.token);

  function setLoginData(newLoginData) {
    Object.assign(loginData, newLoginData);
  }

  function resetLoginData() {
    setLoginData(getInitialLoginData());
  }

  async function getUserToken(id) {
    try {
      const response = await fetch(`/api/token?id=${id}`);
      const json = await response.json();
      setToken(json);
      return json;
    } catch (error) {
      console.error('Помилка отримання токена', error);
    }
  }

  async function getUserFromApi() {
    resetLoginData();
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setLoginData(data.results[0]);
      isUserLoaded.value = true;
      return data.results[0];
    } catch (error) {
      console.error('Помилка завантаження рандомного користувача', error);
    }
  }

  const isLoggedIn = computed(() => Boolean(loginData?.email));

  const fullName = computed(() => `${loginData?.name?.title} ${loginData?.name?.first} ${loginData?.name?.last}`);
  return { loginData, getUserFromApi, setLoginData, isLoggedIn, token, getUserToken, fullName, isUserLoaded }
})
