<template>
	<div>
		<div v-for="itHead in newsList">
			<el-row>
				<router-link style="font-size: 24px;" tag="h5" :to="{name:'detail',params:{id:itHead.newsId}}"  @click.native="getDetail(itHead.newsId)">{{itHead.title}}</router-link>
				<el-col :span = "8">
					<p >{{itHead.publishTime}}</p>
				</el-col> 
				<el-col :span="6" ><p >{{itHead.source}}</p></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		computed:{
			...mapState([
				'newsList'
			]),
			...mapGetters([
				'getNewsList'
			])
		},
		methods:{
			...mapActions([
				'initItem',
				'getDetail'
			])

		},
		created: () => {
			this.initItem
		}
	}
</script>

<style>

</style>
