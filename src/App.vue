<!--
 * @Author: 24min
 * @Date: 2021-12-04 13:12:44
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-12 19:07:55
 * @FilePath: \ip-input\src\App.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <div id="app">
    <h1>ip输入框在线体验</h1>
    <fan-ip-input></fan-ip-input>
    <h1>https://github.com/24min/ip-input</h1>
  </div>
</template>

<script>
// import a from "./components/index";

export default {
  name: "App",
  // components: {
  //   fanIpInput:a.fanIpInput,
  // },
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
