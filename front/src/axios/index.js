import axios from 'axios';

axios.interceptors.response.use(
    (config) => {
        console.log(config.headers.token);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;