import axios from "axios";


export const authAxios = axios.create({
    baseURL:"http://localhost:8000",
    withCredentials : true,
    withXSRFToken : true,
});


export const crudAxios = axios.create({
    baseURL:"http://localhost:8000/api/v1/",
    withCredentials : true,
    withXSRFToken : true,
});