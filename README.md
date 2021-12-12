# ip-input

Imitation of Microsoft IP input box

# Source Code

[24min/ip-input: Imitation of Microsoft IP input box (github.com)](https://github.com/24min/ip-input)

# How to use

```
npm i fan-ip-input
```

`main.js:`

```js
import fanIpInput from "fan-ip-input"

Vue.use(fanIpInput)
```

`app.vue:`

```vue
<!--
 * @Author: 24min
 * @Date: 2021-06-26 09:55:41
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-05 10:51:11
 * @FilePath: \test\test111\src\App.vue
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
-->
<template>
  <div id="app">
    <fan-ip-input v-model="ip"></fan-ip-input>
  </div>
</template>
<script>
export default {
  name:'app',
  data(){
    return{ip:'1.2.3.4'}
  }
}
</script>

```

# Feature

Imitation of Microsoft IP input box,Depends on the vue2,Using the `Ant design vue`'s components 【`<a-input>`】.

* The mouse cursor moves in turn when press Arrow key
* Unable to enter characters other than numbers
* Compatibility processing under Chinese input method removes unallowed input character
* Automatically focus to the next input box when the number in the input box is 3 digits
* Numbers above 255 are converted to 255 when out of focus
* When the mouse cursor is at the end of the input, press the period key to jump to the next input box
* may bo more...
