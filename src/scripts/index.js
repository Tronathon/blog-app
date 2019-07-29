import Vue from 'vue';
import NewsArticles from './components/NewsArticles';
import routes from './routes.js';

Vue.config.productionTip = true;

new Vue({
	render: h => h(NewsArticles),
	router: routes,
	delimiters: ['${', '}'],
	data: window.craftData
}).$mount('#app');
