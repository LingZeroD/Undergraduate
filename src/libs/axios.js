
/**
 * ajax请求配置
 */
import Vue from 'vue';
import axios from 'axios';
Vue.prototype.axios = axios;


// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use((config) => {
    //设置默认的请求头
    //config.headers.Authorization = localStorage.getItem('token');
    //config.headers.AppId = localStorage.getItem('userId');
    //config.headers.DeviceType = 'WEB';

  return config;
}, (error) => {
  return Promise.reject(error);
});

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    (res) => {
      if (res.status === 200) { /*200状态码下*/
        if(res.data && res.data.code) {
          switch (res.data.code) {
            case 100:
              break;
            default:
              //alert(res.data.code);
          }
        }
      }
      return res;
    },
    (error) => {
      return Promise.reject(error);  // 返回接口返回的错误信息
    });

export default axios;
