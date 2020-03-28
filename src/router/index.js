import Vue from 'vue'
import VueRouter from 'vue-router'
// import Users from '@/views/pages/Users.vue'
import {decrypted} from "@/helpers"

const Null404 = r => require.ensure([], () => r(require('@/components/_code//404.vue')), 'big-pages')
const Null503 = r => require.ensure([], () => r(require('@/components/_code//503.vue')), 'big-pages')
// const Login = r => require.ensure([], () => r(require('../views/Login.vue')), 'big-pages')
const Home = r => require.ensure([], () => r(require('../views/pages/Home.vue')), 'big-pages')
// const Users = r => require.ensure([], () => r(require('../views/pages/Users.vue')), 'big-pages')
const Profile = r => require.ensure([], () => r(require('../views/pages/Profile.vue')), 'big-pages')
const DocumentAdd = r => require.ensure([], () => r(require('../views/pages/Document_add.vue')), 'big-pages')
const DocumentIn = r => require.ensure([], () => r(require('../views/pages/Document_in.vue')), 'big-pages')
const DocumentOut = r => require.ensure([], () => r(require('../views/pages/Document_out.vue')), 'big-pages')
const DocumentFav = r => require.ensure([], () => r(require('../views/pages/Document_fav.vue')), 'big-pages')
const Chat = r => require.ensure([], () => r(require('../views/pages/Chat.vue')), 'big-pages')
const Notif = r => require.ensure([], () => r(require('../views/pages/Notif.vue')), 'big-pages')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            auth: true,
            permission: 'dashboard',
        },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            auth: true,
            permission: 'profile',
        },
    },    
    
    {
        path: '/dokumen_masuk',
        name: 'DocumentIn',
        component: DocumentIn,
        meta: {
            auth: true,
            permission: 'gis',
        },        
    },
    {
        path: '/dokumen_keluar',
        name: 'DocumentOut',
        component: DocumentOut,
        meta: {
            auth: true,
            permission: 'gis',
        },        
    },
    {
        path: '/dokumen_favorit',
        name: 'DocumentFav',
        component: DocumentFav,
        meta: {
            auth: true,
            permission: 'gis',
        },        
    },        
    {
        path: '/pesan',
        name: 'Chat',
        component: Chat,
        meta: {
            auth: true,
            permission: 'gis',
        },        
    },  
    {
        path: '/notif',
        name: 'Notif',
        component: Notif,
        meta: {
            auth: true,
            permission: 'gis',
        },        
    },        
    {
        path: '/404',
        name: '404',
        component: Null404,
    },
    {
        path: '/503',
        name: '503',
        component: Null503,
    },
    {
        path: '/document_add',
        name: 'DocumentAdd',
        component: DocumentAdd,
        meta: {
            auth: true,
            permission: 'addloc',
        },        
    },
    // {
    //     path: '/users',
    //     name: 'Users',
    //     component: Users,
    //     meta: {
    //         auth: true,
    //         permission: 'users',
    //     },
    // },

    { path: "*", component: Null404 }    

]

const router = new VueRouter({
    routes,
    mode: 'history',
    // linkActiveClass: "active", for non exact
    linkExactActiveClass: "is-active"
})

router.beforeEach((to, from, next) => {
    // mengecek ada tidak meta auth di dalam meta

    if (to.matched.some(record => record.meta.auth)) {
        // cek di localstorage auth, jika false maka diarahkan ke halaman login
        if (!localStorage.getItem('token')) {
            next('/');
        } else {
            let permission = localStorage.getItem('permission')

            permission = decrypted(localStorage.getItem('permission'));
            if (to.matched.some(record => record.meta.permission)) {
                // console.log(to.meta.permission)
                let sum = permission.find(x => x.target == to.meta.permission)
                // console.log(sum)
                if(sum){
                    if(sum.act_read == '1') {
                        next();
                    }
                }
            } else {
                next('/503');
            }
        }
    } else {
        next();
    }
});

router.afterEach(to => {
    localStorage.setItem('LS_ROUTE_KEY', to.path);
})


export default router