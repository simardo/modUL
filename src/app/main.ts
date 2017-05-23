import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';

Vue.config.productionTip = false;

const vue = new Vue({
    router,
    store,
    template: '<modul></modul>',
    components: { Modul }
});

vue.$mount('#vue');
