import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import cookie from './util/cookie'
Vue.prototype.cookie = cookie;
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')