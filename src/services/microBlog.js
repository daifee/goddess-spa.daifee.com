
import {goddess} from '../utils/http';

// 发博客
export async function post(userId, blog) {
  const api = `/api/v1/users/:userId/micro-blogs/`;
  return await goddess.post(api, blog);
}

// 获取用户博客列表
export async function getListByUserId(userId, page = 1, perPage = 10) {
  const api = `/api/v1/users/${userId}/micro-blogs/`;
  return await goddess.get(api, {params: {page, perPage}});
}

// 删除博客
export async function del(userId, blogId) {
  const api = `/api/v1/users/${userId}/micro-blogs/${blogId}`;
  return await goddess.delete(api);
}

// 获取推荐博客
export async function getRecommended(type = 'goddess') {
  const api = '/v1/micro-blogs/'
  return await goddess.get(api, {params: {type}});
}


