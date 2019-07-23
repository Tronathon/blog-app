<template>
	<ul>
		<li v-for="item in posts">
			x
			<h1>{{item.title}}</h1>
			<img src="{{item.image}}" alt="">
			<!--<p>{{post.content}}</p> -->
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

</style>
