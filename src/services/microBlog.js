
import {goddess} from '../utils/http';

// 发博客
export function post() {
  // todo
}

// 获取用户博客列表
export function getListByUserId() {
  // todo
}

// 删除博客
export function del() {
  // todo
}

// 获取推荐博客
export async function getRecommended(type = 'goddess') {
  const api = '/v1/micro-blogs/'
  return await goddess.get(api, {params: {type}});
}


