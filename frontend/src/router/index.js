import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/Home.vue';

const routes =[
    {path:'/',
    name : 'Home' ,
    component:Home},

    {path:'/login',
    name : 'Login' ,
    component:()=>import("../components/Login.vue")
    },
    {path:'/register',
    name : 'Register' ,
    component:()=>import("../components/Register.vue")
    },
    {path:'/arts',
    name : 'ArtIndex' ,
    component:()=>import("../views/arts/ArtIndex.vue")
    },
    {path:'/arts/create',
    name : 'ArtCreate' ,
    component:()=>import("../views/arts/ArtCreate.vue")
    },
    {path:'/arts/:id/edit',
    name : 'ArtEdit' ,
    component:()=>import("../views/arts/ArtEdit.vue"),
    props: true
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;