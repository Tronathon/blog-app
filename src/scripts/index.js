import Vue from 'vue';
import News from './components/News';
import routes from './routes.js';
import {TweenMax, TimelineLite} from "gsap/all";

const activated = [
	TweenMax,
	TimelineLite
]

Vue.prototype.TweenMax = TweenMax
Vue.prototype.TimelineLite = TimelineLite

Vue.config.productionTip = true;

new Vue({
	render: h => h(News),
	router: routes,
	data: window.craftData
}).$mount('#app');
