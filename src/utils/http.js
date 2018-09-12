/**
 * http请求实例
 */
import axios from 'axios';

export const goddess = axios.create({
  baseURL: 'https://goddess.daifee.com/api/',
  timeout: 3000,
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
    'accept': 'application'
  }
});

