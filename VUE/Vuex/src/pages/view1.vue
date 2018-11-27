<template>
    <div>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <input type="text" v-model="myAge">
      <p>{{myAge}}</p>
      <button type="button" @click="Change(myAge)">点我</button>
      <p>{{getAge}}</p>
    </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
    data(){
      return{
        myAge:''
      }
    },
      computed:{
          ...mapState([
            'name',
            'age'
          ]),
        ...mapGetters([
          'getName',
          'getAge'
        ]),
      },
      methods:{
          ...mapActions([
            'Change'
          ])
      }
    }
</script>

<style scoped>

</style>
