const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        // proxy: {
        //     '/': {
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //         logLevel: 'debug', // 터미널에 proxy 로그 생성
        //     }
        // }
    },
})
