<template>
    <div>
      <ul>
          <li v-for="it in currData">
            <p>{{it.item_id}}</p>
            <p>{{it.choice}}</p>
          </li>
      </ul>
      <button @click="change(0)">改变</button>
    </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
    export default {

      computed:{
          ...mapState([
            'title',
            'itemNum',
            'itemDetail',
            'currData'
          ]),
        ...mapGetters([
            'getItemDetailsI'
        ]),
      },
      methods:{
          ...mapActions([
              'change',
            'init'
          ])
      },
      created(){
        this.init();
        console.log(this.currData);
      }
    }
</script>

<style scoped>

</style>
