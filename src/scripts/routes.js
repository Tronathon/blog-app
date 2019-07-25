import VueRouter from 'vue-router';

const router = new VueRouter({
	routes: [
	  // dynamic segments start with a colon
	  { path: '/news/:id', component: NewsItem }
	]
  })
