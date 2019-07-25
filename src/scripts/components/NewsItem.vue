<template>
	<div class="c-news-item">
		<img v-bind:src="item.image" alt="">
		<h1>{{item.title}}</h1>
		<p>{{item.content}}</p>
	</div>
</template>

<script>
export default {
	name: "news-item",
	data() {
		return window.craftData
	}
}
</script>

<style>

</style>
