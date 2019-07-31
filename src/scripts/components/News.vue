<template>
	<div>
		<transition :css="false" @leave="onLeave" @enter="onEnter">
		<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import {TweenMax, TimelineLite} from "gsap/TweenMax";

export default {
	name: 'news',
	methods: {
		onLeave() {
			let elements = Array.from(document.querySelectorAll('.js-article'));
			let tl = new TimelineLite();
			elements.forEach(element => {
				tl.from(element, 1, {y: 0})
				tl.to(element, 1, {y: -500, ease: Bounce.easeOut, delay: 0.2})
			});

		},
		onEnter() {
			const item = document.querySelector('.c-news-item');
			let tl = new TimelineLite();
			tl.from(item, 1, {y: -500})
			tl.to(item, 1, {y: 0, ease: Sine.easeOut})

		}
	}
}
</script>

<style>

</style>
