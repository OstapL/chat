export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return typeof value === 'object' && value !== null && !isArray(value);
}

export function isNotEmptyObject(value) {
  return isObject(value) && Boolean(Object.keys(value).length);
}

export const getDataFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }
}

export const setToLocalStorage = async (key, data) => {
  if (typeof window !== 'undefined') await localStorage.setItem(key, JSON.stringify(data));
}
