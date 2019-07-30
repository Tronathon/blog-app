import Vue from 'vue';
import VueRouter from 'vue-router';
import News from './components/News.vue'
import NewsItem from './components/NewsItem';
import NewsArticles from './components/NewsArticles';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
	  // dynamic segments start with a colon
		{ path: '/news-item/:id', name: 'news-item', component: NewsItem },
		{ path: '/news', name: 'news-articles', component: NewsArticles },
	]
  })
