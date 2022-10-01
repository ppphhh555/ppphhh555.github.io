import axios from "axios";
import nprogress from 'nprogress';

import 'nprogress/nprogress.css';
const mock = axios.create({
baseURL:"/mock",
    timeout: 5000,
})
mock.interceptors.request.use((config) => {
    nprogress.start();
    return config;
})
mock.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;

}, (error) => {
    return Promise.reject(new Error("faile"))
});


export default mock;