<template>
	<div class="c-body">
		<div class="c-background js-skew"></div>
		<transition :css="false" @enter="enter" @leave="leave" mode="out-in">
		<router-view></router-view>
		</transition>
	</div>
</template>

<script>

export default {
	name: 'news',
	methods: {
		enter(el, done) {
			let elements = Array.from(document.querySelectorAll('.js-news-item'));
			let skew = document.querySelector('.js-skew');
			let text = Array.from(document.querySelectorAll('.js-hidden'));

			if (elements) {
				TweenMax.staggerFromTo(elements, 1, {y: -500}, {y: 0, ease: Sine.easeOut, onComplete: done}, 0.2)
			}

			if (skew) {
				TweenMax.to(skew, 0.8, {skewX:"0deg", skewY:"0deg", delay: 0.2, onComplete: done})
			}

			if (text) {
				TweenMax.set(text, {opacity: 0})
				TweenMax.to(text, 0.2, {opacity: 1, delay: 0.4})
			}
		},
		leave(el, done) {
			let elements = Array.from(document.querySelectorAll('.js-news-item'));
			let skew = document.querySelector('.js-skew');
			let text = Array.from(document.querySelectorAll('.js-hidden'))

			if (elements) {
				TweenMax.staggerTo(elements, 1, {y: -500, ease: Sine.easeOut, onComplete: done}, 0.2)
			}

			if (skew) {
				TweenMax.to(skew, 0.8, {skewX:"5deg", skewY:"5deg", transformOrigin:"right top", onComplete: done})
			}

			if (text) {
				TweenMax.from(text, 0.2, {x: 0})
				TweenMax.to(text, 0.2, {x: -300, opacity: 0})
			}
		}
	}
}

</script>

<style>

.c-body {
	background-color: #ffa096;
	z-index: -9;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	position: absolute;
	font-family: 'Roboto', sans-serif;
}

.c-background {
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #FFE5E2;
	z-index: -10;
	position: absolute;
}

</style>
