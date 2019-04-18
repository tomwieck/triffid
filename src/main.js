import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueLogger from 'vuejs-logger'
import VueGeolocation from 'vue-browser-geolocation';

import store from './store'

const options = {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
};

Vue.use(VueLogger, options);
Vue.use(VueGeolocation);

const isProduction = process.env.NODE_ENV === 'production'
Vue.config.API_URL = isProduction ? 'https://triffids.app/api/v1' : 'http://127.0.0.1:5000/api/v1'
Vue.config.hasGeolocation = navigator.geolocation;
Vue.config.locationAllowed = false;
Vue.config.productionTip = false;

Vue.prototype.$config = Vue.config;

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')