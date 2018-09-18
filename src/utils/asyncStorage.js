/**
 * 异步存储
 * 支持存储object
 */

const storage = window.localStorage;

export async function getItem(key) {
  let value = storage.getItem(key);
  try {
    value = JSON.parse(value);
  } catch (error) {
    // ignore
  }
  return value;
}

export async function setItem(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  return storage.setItem(key, value);
}

export async function remoteItem(key) {
  return storage.removeItem(key);
}
