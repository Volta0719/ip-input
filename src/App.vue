<!--
 * @Author: 24min
 * @Date: 2021-12-04 13:12:44
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-04 20:07:44
 * @FilePath: \ip-input\src\App.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <div id="app">
    <fan-ip-input></fan-ip-input>
  </div>
</template>

<script>
import fanIpInput from "./components/ipInput.vue";

export default {
  name: "App",
  components: {
    fanIpInput,
  },
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
