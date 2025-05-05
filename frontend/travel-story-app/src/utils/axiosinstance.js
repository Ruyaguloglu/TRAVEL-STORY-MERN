//Axios Nedir? Axios, modern web tarayıcılarında ve Node.js'de kullanılan bir JavaScript kütüphanesidir. 
//Axios, XMLHttpRequest (XHR) ve Fetch API ile aynı işlevi görür, ancak daha kolay bir kullanıma sahiptir ve Promise tabanlıdır.
//React uygulamalarında REST API'lerle etkileşim kurmak için sıklıkla kullanılan bir HTTP istemci kütüphanesidir

import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, //API isteklerinden 10 saniye sonra yanıt gelmezse isteğin iptal edilmesini sağlıyor.
    headers: {
            "Content-Type":"application/json",
    },    
});

// İstek Öncesi (Request) Yakalama : Her HTTP isteği yapılmadan önce çalışacak bir Interceptor (yakalama mekanizması) ekleniyor.
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;

        }
        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
);


// Eğer kullanıcı giriş yapmışsa (token varsa), otomatik olarak istek başlığına ekliyor.
//Başka dosyalarda kullanılabilir hale getiriyor.
export default axiosInstance;






