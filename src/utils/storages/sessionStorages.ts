const getSessionStorage = (name: string) => {
  return sessionStorage.getItem(name);
};

const setSessionStorage = (name: string, data: string) => {
  return sessionStorage.setItem(name, data);
};

const removeSessionStorage = (name: string) => {
  try {
    sessionStorage.removeItem(name);
    return true;
  } catch {
    return false;
  }
};

export { getSessionStorage, setSessionStorage, removeSessionStorage };
