const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave:false,
    transpileDependencies: true,
    devServer: {
        port: 8080,
        proxy: {
            '/': {
                target: 'http://localhost:9000',
                changeOrigin: true,
                ws: false, // 웹소켓 off
            }
        }
    },
    outputDir: "../back/src/main/resources/static",
})
