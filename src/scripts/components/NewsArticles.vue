<template>
	<ul class="c-container">
		<li v-for="item in posts" :key="item.id">
			<router-link :to="{name: 'news-item', params: { id: item.id }}">
			<img v-bind:src="item.image" alt="">
			<h1>{{item.title}}</h1>
			<p>{{item.content}}</p>
			</router-link>
		</li>
	</ul>
</template>

<script>

export default {
	name: "news-articles",
	data() {
		return window.craftData
	}
}
</script>

<style>

.c-container {
	display: flex;
	width: 90%;
	flex-flow: row;
	margin: 10rem auto;
	justify-content: space-around;
}
</style>
