<!--
 * @Author: fanjf
 * @Date: 2021-12-16 09:13:14
 * @LastEditTime: 2021-12-16 10:46:23
 * @LastEditors: fanjf
 * @FilePath: \ip-input\README.md
 * @Description: 
-->
# ip-input

Imitation of Microsoft IP input box

# Feature

Imitation of Microsoft IP input box,Depends on the vue2,Using the [Ant Design vue(1.7.8)](https://www.antdv.com/components/input-cn/)'s components 【`<a-input>`】.

* The mouse cursor moves in turn when press Arrow key
* Unable to enter characters other than numbers
* Compatibility processing under Chinese input method removes unallowed input character
* Automatically focus to the next input box when the number in the input box is 3 digits
* Numbers above 255 are converted to 255 when out of focus
* When the mouse cursor is at the end of the input, press the period key to jump to the next input box
* May be more...

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

Also，If you want to introduce it separately,just like this:

```
<template>
  <div id="app">
    <demo-input v-model="ip"></demo-input>
  </div>
</template>
<script>
import ipInput from 'fan-ip-input'
export default {
  name:'app',
  data(){
    return{ip:'1.2.3.4'}
  },
components:{
  demoInput:ipInput.fanIpInput,
 }
}
</script>
```

# Source Code

[24min/ip-input: Imitation of Microsoft IP input box (github.com)](https://github.com/24min/ip-input)

# Online Example

[fan-ip-input (volta0719.github.io)](https://volta0719.github.io/ip-input/dist/)
