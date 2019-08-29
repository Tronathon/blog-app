<template>
	<ul class="c-container-detail">
		<li v-for="item in posts" :key="item.id">
			<div v-if="item.id == namedId" class="c-news-item js-news-item">
				<img v-bind:src="item.image" alt="" style="width: 500px">
				<div class="c-news-detail">
					<h1 class="js-hidden">{{item.title}}</h1>
					<p class="js-hidden">{{item.full}}</p>
					<router-link class="js-hidden" :to="{name: 'news-articles'}">Back to news</router-link>
				</div>
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

<style scoped>
.c-container-detail {
	display: flex;
	width: 70%;
	margin: auto;
	flex-flow: row;
	justify-content: start;
}

.c-news-item {
	width: 100%;
	display: flex;
	flex-flow: row;
}

.c-news-detail {
	padding: 0 2rem;
}

</style>
