var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:"./src/script/main.js",  //文件入口路径，path还可以是数组用还处理平行不依赖的文件，还可以是对象用来处理多页面的应用
    output:{                        //打包后出口
        path:__dirname + "/dist",    //出口路径
        filename:"js/[name]-[chunkhash].js"            //打包后重命名的输出文件，当多文件输出时可以用占位符[name][hash][chunkhash]

    },
    plugins:[                           //插件    plugin值是一个数组
        new htmlWebpackPlugin({
            template:"index.html"
        })         //可以定义生成的的HTML文件的模版并将打包生成的js插进去
    ]
}