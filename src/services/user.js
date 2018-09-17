
import {goddess} from '../utils/http';


// 授权
export async function authorize(user) {
  const api = '/api/v1/authorization';
  return await goddess.post(api, user);
}

// 注册用户
export async function register(user) {
  const api = '/api/v1/users/';
  return await goddess.post(url, user);
}

// 获取 cos 临时key
export async function getCosKeys() {
  const api = '/api/v1/cos/sts';
  return await goddess.get(api);
}
