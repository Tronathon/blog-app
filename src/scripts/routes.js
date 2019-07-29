import VueRouter from 'vue-router';
import Vue from 'vue';
import NewsItem from './components/NewsItem.vue';
import NewsArticles from './components/NewsArticles.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
	  // dynamic segments start with a colon
		{ path: '/news/:id', name: 'news-item', component: NewsItem },
		{ path: '/news/', name: 'news', component: NewsArticles }
	]
  })
