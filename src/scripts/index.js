import Vue from 'vue';
import NewsArticles from './components/NewsArticles';

Vue.config.productionTip = true;

new Vue({
	render: h => h(NewsArticles),
	delimiters: ['${', '}'],
	data: window.craftData
}).$mount('#app');
