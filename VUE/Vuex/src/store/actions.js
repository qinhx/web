export default {
		handleClick({commit},tab){
			commit('getItem',tab)
		},
		getDetail({commit},newsID){
			commit('getDetail',newsID)
		},
		initItem({commit}){
			commit('initItem')
		
	}
}