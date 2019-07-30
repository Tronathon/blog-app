<template>

	<div class="c-news-item">

		<!-- <img v-bind:src="item.image" alt=""> -->
		<h1>{{title}}</h1>
		<!-- <p>{{content}}</p> -->

		<router-link :to="{name: 'news-articles'}">Back to news</router-link>
	</div>

</template>

<script>
export default {
	name: "news-item",
	data() {
		return window.craftData
	},
	computed: {
		title() {
			this.posts.map(a => a.title)
		}
	}
}
</script>

<style>

</style>
