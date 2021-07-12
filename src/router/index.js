//配置生产环境，开发环境，端口号等
import Vue from 'vue'
import VueRouter from 'vue-router'
import VDistpicker from 'v-distpicker'
import axios from 'axios'
import cookie from '../util/cookie'
//引入cookie.js

new Vue({
    axios
})
Vue.component('v-distpicker',VDistpicker)

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Default',
        redirect: '/login',
    },
    {
        path: '/register',
        name: 'Register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../pages/Register.vue'),
    },{
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../pages/login.vue'),
    },{
        path: '/hello',
        name: 'Hello',
        component: () =>
        import('../pages/Hello.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to,from,next) => {
    if(to.matched.length===0){
        next('/404')
    }
    if(cookie.getCookie("LoginName")){if(to.path==="/login"){
        next('/Hello')
    }else{
        next()
    }
}else{
        if(to.path==="/Register"||to.path==="/login"){
            next()
        }else{
            next('/login')
        }
    }

})



export default router