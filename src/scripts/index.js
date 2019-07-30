import Vue from 'vue';
import News from './components/News';
import routes from './routes.js';

Vue.config.productionTip = true;

new Vue({
	render: h => h(News),
	router: routes,
	delimiters: ['${', '}'],
	data: window.craftData
}).$mount('#app');
