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
					<el-tab-pane label="top" name="top">默认</el-tab-pane>
					<el-tab-pane label="科技"name="keji">科技</el-tab-pane>
					<el-tab-pane label="体育" name="sports">体育</el-tab-pane>
					<el-tab-pane label="财经" name="caijing">财经</el-tab-pane>
					<el-tab-pane label="社会" name="shehui">社会</el-tab-pane>
					<el-tab-pane label="国内" name="guonei">国内</el-tab-pane>
					<el-tab-pane label="国际" name="guoji">国际</el-tab-pane>
					<el-tab-pane label="军事" name="junshi">军事</el-tab-pane>
					<el-tab-pane label="金融" name="jinrong">金融</el-tab-pane>
					<el-tab-pane label="时尚" name="shishang">时尚</el-tab-pane>
					<el-tab-pane label="娱乐" name = "yule">娱乐</el-tab-pane>
				</el-tabs>
		</el-main>
		<el-footer></el-footer>
	</el-container>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			handleClick(tab) {
				let label = tab.$options.propsData.label
				let name = tab.$options.propsData.name
				console.log(label)
				console.log(name)
				axios.get('/api',{
					params:{
						appkey:'4d8f989a78e01bc099e147f362fb16ee',
						page:1,
						category:"娱乐"
					}
				})
					.then(response => (console.log(response.data))).catch(err=>(console.log(err)))
				
      }
		}
	}
</script>
		
		
<style>
	.redHead{
		background-color:orangered;
	}
</style>
