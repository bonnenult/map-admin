/* eslint-disable */
import axios from "axios";
import { ElMessage } from "element-plus";
import store from "@/store";

export function handelRequestError(error) {
    switch (error.response.status) {
        case 401:
            ElMessage({
                ElMessage: "未授权！请重新登录",
                type: "error",
                duration: 5 * 1000
            });
            break;
        case 403:
            ElMessage({
                ElMessage: error.response.content,
                type: "error",
                duration: 5 * 1000
            });
            break;
        case 500:
            ElMessage({
                ElMessage: "服务器繁忙，请稍后重试",
                type: "error",
                duration: 5 * 1000
            });
            break;
        default:
            break;
    }
}

export function configSetting(config) {
    const { url } = config;
    if (url.indexOf("api.weixin.qq.com") >= 0) {
        return config;
    }
    config.headers["Authorization"] = "bearer " + store.getters.token;
    return config;
}

const service = axios.create({
    baseURL: "", // url = base url + request url
    timeout: 200000
});

service.interceptors.request.use(
    config => {
        return configSetting(config);
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        return res;
    },
    error => {
        if (error && error.response) {
            handelRequestError(error);
        }

        return Promise.reject(error);
    }
);

export default service;