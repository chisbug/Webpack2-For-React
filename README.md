# 基于webpack2的React开发配置

这是一套入门向的基于webpack2.2, react, react-router, redux 的小脚手架</br>
包含一个router和redux结合的小示例</br>
脚手架功能不算多, 但可以满足基本的开发需要</br>
当然, 非常高兴能看到你的意见与建议

### 开发环境功能
*   模块热加载(HMR)
*   source-map
*   基于babel的es6代码编译
*   less自动编译
*   react-router的基本配置
*   redux的基本配置

### 生产环境功能
*   UglifyJsPlugin代码压缩
*   压缩css代码
*   分离库代码(如react)
*   自动生成webpack-assets.json文件, 方便查看打包完成后的文件名(无需手动粘贴替换script的src)
*   可配置的模板html(可以配置符合项目需求的index.html并自动插入script路径), 打包后生成最终的html文件
*   打包图片等静态资源(低于10k转换为base64编码), 生成md5文件名
*   打包生成md5文件名的js主文件(方便去缓存)

##### 如果是react新手的话, 可以看一下代码中的注释

# :)