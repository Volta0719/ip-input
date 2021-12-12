/*
 * @Author: 24min
 * @Date: 2021-12-05 13:13:04
 * @LastEditors: 24min
 * @LastEditTime: 2021-12-12 18:48:26
 * @FilePath: \ip-input\vue.config.js
 * @note: If it ain't broke, don't fix it.🍤
 * @Description: to bo continued...
 */
module.exports = {
    productionSourceMap: false, //close production sourceMap
    publicPath: process.env.NODE_ENV === "development" ? "" : "/ip-input/dist/",
    css: {
        extract: false
    },
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }
}