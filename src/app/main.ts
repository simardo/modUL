import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import Modul from './components/modul/modul';

import boutons from 'vuejs-components/dist/buttons';
import text from 'vuejs-components/dist/text';

Vue.config.productionTip = false;

Vue.use(boutons);
Vue.use(text);

const vue = new Vue({
    router,
    store,
    template: '<modul></modul>',
    components: { Modul }
});

vue.$mount('#vue');
