import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    title: 'Friday',
    itemNum: 0,
    itemDetail:[
      {id:1,
        items:[
          {item_id:1,choice:"err",isRightAnswer:0},
          {item_id:2,choice:"err",isRightAnswer:0},
          {item_id:3,choice:"err",isRightAnswer:0},
          {item_id:4,choice:"right",isRightAnswer:1}
          ]
      },
      {id:2,
      items: [
        {item_id:5,choice:"err",isRightAnswer:0},
        {item_id:6,choice:"err",isRightAnswer:0},
        {item_id:7,choice:"err",isRightAnswer:0},
        {item_id:8,choice:"right",isRightAnswer:1}
      ]},
      {id:3,
        items: [
          {item_id:9,choice:"err",isRightAnswer:0},
          {item_id:10,choice:"err",isRightAnswer:0},
          {item_id:11,choice:"err",isRightAnswer:0},
          {item_id:12,choice:"right",isRightAnswer:1}
        ]}
    ],
    currData:[]
  },
  getters:{
      getTitle:res=>res.state.title,
      getItemNum:res=>res.state.itemNum,
      getItemDetails:res =>res.state.itemDetail,
    getItemDetailsI:(res,i) =>res.state.itemDetail.get(i)
  },
  mutations:{
        getNextItem(state){
          state.currData = state.itemDetail[state.itemNum].items;
          state.itemNum++;
          if (state.itemNum==3)
            state.itemNum=0
          console.log(state.itemNum)
        },
    initItem(state){
      state.currData = state.itemDetail[state.itemNum].items;
    }
  },
  actions:{
        change({commit},id){
          commit('getNextItem',id)
        },
        init({commit}){
          commit('initItem')
        }

  }
})
