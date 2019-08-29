<template>
	<div class="c-wrapper">
		<input class="c-input js-input" type="text" v-model="search" placeholder="Search news">
		<ul class="c-container">
			<li v-for="item in filteredPosts" :key="item.id">
				<router-link :to="{name: 'news-item', params: { id: item.id }}">
					<article class="js-news-item">
						<img v-bind:src="item.image" alt="">
						<h1 class="js-hidden">{{item.title}}</h1>
						<p class="js-hidden">{{item.content}}</p>
					</article>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	name: "news-articles",
	data() {
		return {
			posts: window.craftData,
			search: ''
		}
	},
	computed: {
		filteredPosts: function(){
			return this.posts.posts.filter((post) => {
				return post.title.match(this.search)
			})
		}
	}
}

</script>

<style scoped>

.c-wrapper {
	text-align: center;
	width: 100%;
}

.c-input {
	width: 60%;
	margin: 0 auto 2.45rem auto;
	padding: 10px;
	border: none;
	color: #FFE5E2;
}

.c-input::placeholder {
	color: #FFE5E2;
}

.c-container {
	display: flex;
	width: 90%;
	margin: auto;
	flex-flow: row;
	justify-content: space-around;
}

</style>
