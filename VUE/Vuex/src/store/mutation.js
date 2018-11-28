import axios from 'axios';
export default{
		getItem(state,tab){
			let name = tab.$options.propsData.name
			axios.get('/api1',{
				params:{
					appkey:'4d8f989a78e01bc099e147f362fb16ee',
					page:1,
					category:name
				}
			}).then(response => (state.newsList=response.data.result.result.newsList))
			.catch(err=>(console.log(err)))
		},
		getDetail(state,newID){
			axios.get('/api2',{
				params:{
					appkey:'4d8f989a78e01bc099e147f362fb16ee',
					newsId:newID
				}
			}).then(response => (state.newsDetail=response.data.result.result))
			.catch(err=>(console.log(err)))
		},
		initItem(state){
		axios.get('/api1',{
			params:{
				appkey:'4d8f989a78e01bc099e147f362fb16ee',
				page:1,
				category:"要闻"
			}
		}).then(response => (state.newsList=response.data.result.result.newsList))
		.catch(err=>(console.log(err)))	
		}
	
}