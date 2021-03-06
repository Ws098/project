import axios from 'axios'; 
// import qs from "qs";//处理数据

console.log('%c [ process.env ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', process.env)

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service;
