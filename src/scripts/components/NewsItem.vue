<template>
	<ul>
		<li v-for="item in posts" :key="item.id">

		<div v-if="item.id == namedId" class="c-news-item">
			<img v-bind:src="item.image" alt="">
			<h1>{{item.title}}</h1>
			<p>{{item.content}}</p>
		</div>

		</li>
		<router-link :to="{name: 'news-articles'}">Back to news</router-link>
	</ul>
</template>

<script>
import {TweenMax, TimelineLite} from "gsap/TweenMax";

export default {
	name: "news-item",
	data() {
		return window.craftData
	},
	computed: {
		namedId() {
			return this.$route.params.id
		}
	},
	methods: {
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
.c-news-item {
	width: 33%;
	margin: 5% auto;
}
</style>
