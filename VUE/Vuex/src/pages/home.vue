<template>
	<el-container>
		<el-header class="redHead" >
			<el-row >
				<el-col :span="4">邮件</el-col>
				<el-col :span="16">今日头条</el-col>
				<el-col :span="4">搜索</el-col>
			</el-row>
		</el-header>
		<el-main style="padding: 0;">   
			  
				<el-tabs  type="border-card" @tab-click="handleClick">
					<el-tab-pane label="要闻" name="要闻"></el-tab-pane>
					<el-tab-pane label="时尚" name="时尚"></el-tab-pane>
					<el-tab-pane label="数码" name="数码"></el-tab-pane>
					<el-tab-pane label="房产" name="房产"></el-tab-pane>
					<el-tab-pane label="科技"name="科技"></el-tab-pane>
					<el-tab-pane label="体育" name="体育"></el-tab-pane>
					<el-tab-pane label="财经" name="财经"></el-tab-pane>
					<el-tab-pane label="星座" name="星座"></el-tab-pane>
					<el-tab-pane label="汽车" name="汽车"></el-tab-pane>
					<el-tab-pane label="游戏" name="游戏"></el-tab-pane>
					<el-tab-pane label="娱乐" name ="娱乐"></el-tab-pane>
					<item></item>
				</el-tabs>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>

<script>
	import {mapActions} from 'vuex'
	import item from '../component/item.vue'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			...mapActions([
				'handleClick'
			])
		},
		components:{
			item
		}
	}
</script>
		
		
<style>
	.redHead{
		background-color:orangered;
	}
</style>
