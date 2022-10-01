import axios from "axios";
import nprogress from 'nprogress';
import store from "@/store"

import 'nprogress/nprogress.css';
const requests = axios.create({
baseURL:"/api",
    timeout: 5000,
})
requests.interceptors.request.use((config) => {
   
        //请求头添加一个字段，字段不能瞎写
    
   
   
    if(store.state.Detail.uuid_token){
config.headers.userTempId = store.state.Detail.uuid_token
    }
    if(store.state.Login.token){
        config.headers.token = store.state.Login.token
    }
    
    nprogress.start();
    return config;
})
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;

}, (error) => {
    return Promise.reject(new Error("faile"))
});


export default requests;