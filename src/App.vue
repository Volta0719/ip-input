<!--
 * @Author: 24min
 * @Date: 2021-12-04 13:12:44
 * @LastEditors: fanjf
 * @LastEditTime: 2023-07-31 10:20:01
 * @FilePath: \ip-input\src\App.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <div id="app">
    <h1>🪸 ip输入框在线体验</h1>
    <fan-ip-input v-model="ip"></fan-ip-input>
    <p>Result IP:【{{ ip }}】</p>
    <h1>https://github.com/Volta0719/ip-input</h1>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      ip: '127.0.0.1'
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
