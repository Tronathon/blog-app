<template>
	<div>
		<transition :css="false" @before-leave="beforeLeave">
		<router-view></router-view>
		</transition>
	</div>
</template>

<script>
// import NewsItem from './NewsItem.vue';

export default {
	name: 'news',
	methods: {
		beforeLeave () {
			let elements = Array.from(document.querySelectorAll('.js-article'));
			let tl = new TimelineLite();
			elements.forEach(element => {
				tl.to(element, 1, {y: -500, ease: Bounce.easeOut, delay: 0.5})
			});
		}
	}
}
</script>

<style>

</style>
