# webpack
#学习webpack,我认为还是很有必要的，毕竟我还是需要一个前端自动化构建工具的
#1.运行
webpack -help
#可以出现webpack中所有的命令
#可以一条一条搞清楚 
--module-bind "css=style-loader!css-loader"
--config webpack.dev.config.js 当不是默认配置时使用这个命令改变默认指定配置文件
#绑定遇到css文件使用style-loader和css-loader,这样就不用在每一个文件中指明用什么样的loader,方便很多！
#2.webpack.config.js配置
module.exports = {}具体看自己的代码

package.json添加文件描述
在script中可以自定义命令如：
第8行webpack:自定义webpack命令不用在终端中输入很多命令了这里可以一次性定义完，超级方便终端中运行npm run webpack即可
# webpack
# webpack
