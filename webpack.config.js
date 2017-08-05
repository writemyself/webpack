// var path = require("path");
module.exports = {
    entry:"./src/script/main.js",  //文件入口路径，path还可以是数组用还处理平行不依赖的文件，还可以是对象用来处理多页面的应用
    output:{                        //打包后出口
        path:__dirname + "/dist/js",    //出口路径
        filename:"bundle.js"            //打包后重命名的输出文件，当多文件输出时可以用占位符[name][hash][chunkhash]

    }
}