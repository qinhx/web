<template>
	<div>
		<h3>{{newsDetail.title}}</h3>
		<p v-html="newsDetail.content"></p>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		computed:{
			...mapState([
				'newsDetail'
			])
		}
	}
</script>

<style>

</style>
