<template>
  <div>
    <router-view></router-view>
    <router-link :to="{name:'view1'}" tag="a">view1</router-link>
  </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>
