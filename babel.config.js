/*
 * @Author: 24min
 * @Date: 2021-12-04 13:12:44
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-04 13:30:04
 * @FilePath: \ip-input\babel.config.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ["import", { libraryName: "ant-design-vue", libraryDirectory: "es", style: "css" }] // `style: true` will load less file
    ]
}