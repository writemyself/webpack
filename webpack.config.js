var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:{
        a:"./src/script/a.js",
        b:"./src/script/b.js",
        c:"./src/script/c.js",
        d:"./src/script/d.js",
        main:"./src/script/main.js"
    },  //文件入口路径，path还可以是数组用还处理平行不依赖的文件，还可以是对象用来处理多页面的应用
    output:{                        //打包后出口
        path:__dirname + "/dist",    //出口路径
        filename:"js/[name]-[chunkhash].js"            //打包后重命名的输出文件，当多文件输出时可以用占位符[name][hash][chunkhash]

    },
    plugins:[                           //插件    plugin值是一个数组
        new htmlWebpackPlugin({         //可以定义生成的的HTML文件的模版并将打包生成的js插进去
            template:"index.html",  //模版文件
            filename:"index.html", //生成的文件名同样可以使用占位符
            inject:"body",   //指定插入位置
            // date:new Date(),
            title:"xiao song learn webpack! part index",//设定html title值 使用模版语法替换<%= %>
            // minify:{    //压缩 文档有详细介绍
                // removeComments:true,
                // collapseWhitespace:true
            // }
            chunks:["main","a"]

        }),
        new htmlWebpackPlugin({         //可以定义生成的的HTML文件的模版并将打包生成的js插进去
            template:"index.html",  //模版文件
            filename:"a.html", //生成的文件名同样可以使用占位符
            inject:"body",   //指定插入位置
            title:"xiao song learn webpack! part A",//设定html title值 使用模版语法替换<%= %>
            chunk:["b","c"]
        }),
        new htmlWebpackPlugin({         //可以定义生成的的HTML文件的模版并将打包生成的js插进去
            template:"index.html",  //模版文件
            filename:"b.html", //生成的文件名同样可以使用占位符
            inject:"body",   //指定插入位置
            title:"xiao song learn webpack! part B",//设定html title值 使用模版语法替换<%= %>
            chunk:["a","d"]
        }),
        new htmlWebpackPlugin({         //可以定义生成的的HTML文件的模版并将打包生成的js插进去
            template:"index.html",  //模版文件
            filename:"c.html", //生成的文件名同样可以使用占位符
            inject:"body",   //指定插入位置
            title:"xiao song learn webpack! part C",//设定html title值 使用模版语法替换<%= %>
            chunks:["b","d"]
        }),
        new htmlWebpackPlugin({         //可以定义生成的的HTML文件的模版并将打包生成的js插进去
            template:"index.html",  //模版文件
            filename:"d.html", //生成的文件名同样可以使用占位符
            inject:"body",   //指定插入位置
            title:"xiao song learn webpack! part D",//设定html title值 使用模版语法替换<%= %>
            chunks:["c","d"]
        }),
    ]
}