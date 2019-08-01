<template>
	<transition :css="false" @enter="enter" @leave="leave" mode="out-in">
	<router-view></router-view>
	</transition>
</template>

<script>

export default {
	name: 'news',
	methods: {
		enter(el, done) {
			let item = document.querySelector('.js-news-item');
			let tl = new TimelineLite();
			if(item) {
				tl.from(item, 1, {y: -500})
				tl.to(item, 1, {y: 0, ease: Sine.easeOut, delay: 0.2, onComplete: done})
			}
			console.log('enter')
		},
		leave(el, done) {
			let elements = Array.from(document.querySelectorAll('.js-news-item'));

			if (elements) {
				TweenMax.staggerTo(elements, 0.5, {y: -500, ease: Sine.easeOut, delay: 0.2, onComplete: done}, 0.2)
			}
			console.log('leave')
		}
	}
}

</script>

<style>

</style>
