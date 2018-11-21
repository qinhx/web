<template>
  <div id="app">
    <div class="tabs">
      <h6>测试我的Router-link</h6>
      <router-view> </router-view>
      <ul>
      <router-link :to="{name:'home'}" tag="li"><a>home</a></router-link>
      <router-link :to="{name:'explorer'}" tag="li"><a>explorer</a></router-link>
      <router-link :to="{name:'me'}" tag="li"><a>me</a></router-link>
      <router-link :to="{name:'home'}" tag="li"><a>home</a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
</style>
