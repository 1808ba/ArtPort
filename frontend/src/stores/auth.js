import { defineStore } from "pinia";
// import axios from "axios";
import { authAxios } from "../axiosInstances";

export const useAuthStore = defineStore("auth",{
    state:()=>({
        authUser:null
    }),
    getters:{
        user: (state) =>state.authUser
    },
    actions:{
        async getToken() 
            {
              await authAxios.get('/sanctum/csrf-cookie');
            },
            async getUser(){
              this.getToken();
              const data = await authAxios.get('/api/user');
              this.authUser =data.data;
            },

            async handleLogin (data) {
              await this.getToken();
              await authAxios.post('/login', {
                  email: data.email,
                  password: data.password,
              });
              // router.push('/');
               this.router.push('/');
            },

            async handleRegister(data)  {
              await this.getToken();
              await authAxios.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
              });
               this.router.push('/'); 
            },
            async handleLogout(){
              await authAxios.post("/logout");
              this.authUser = null;
            }
    },
});

