/*
 * @Author: 24min
 * @Date: 2021-12-05 10:20:30
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-05 10:24:43
 * @FilePath: \ip-input\src\components\index.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */

import fanIpInput from "./ipInput.vue"


const install = (Vue) => {
    if (install.installed) return
    Vue.component(fanIpInput.name, fanIpInput)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    fanIpInput
}