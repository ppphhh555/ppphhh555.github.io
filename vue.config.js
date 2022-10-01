const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,
  transpileDependencies: false,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "  http://gmall-h5-api.atguigu.cn ",
      },
    },
  },
})
