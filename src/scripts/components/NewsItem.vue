<template>
	<ul>
		<li v-for="item in posts" :key="item.id">
			<div v-if="item.id == namedId" class="c-news-item js-news-item">
				<img v-bind:src="item.image" alt="">
				<h1 class="js-hidden">{{item.title}}</h1>
				<p class="js-hidden">{{item.content}}</p>
				<router-link class="js-hidden" :to="{name: 'news-articles'}">Back to news</router-link>
			</div>
		</li>
	</ul>
</template>

<script>

export default {
	name: "news-item",
	data() {
		return window.craftData
	},
	computed: {
		namedId() {
			return this.$route.params.id
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
