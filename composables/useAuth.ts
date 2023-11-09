export const initRandomUser = async () => {
  const { setLoginData, getUserFromApi } = useUserStore();
  const localUser = getDataFromLocalStorage('user');
  try {
    if(isNotEmptyObject(localUser)) {
      setLoginData(localUser);
    }
    else {
      const user = await getUserFromApi();
      setToLocalStorage('user', user);
    }
  } catch (e) {
    throw e;
  }
}
