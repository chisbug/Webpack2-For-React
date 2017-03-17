# 基于Webpack2的React开发配置

这是一个基于webpack2.2, react, react-router, redux 的小脚手架</br>
包含了一个router和redux结合的小示例</br>
脚手架功能不算多, 但可以满足基本的开发需要</br>
后期会逐步加入代码检查和代码测试功能</br>

### 文件目录: (仅作示例, 你可以根据个人喜好任意组织)
+ /src
    - /components (组件文件夹)<br>
    - .babelrc (babel配置文件)<br>
    - actions.js (action文件)<br>
    - common.less (公共样式)<br>
    - index.html (模板文件,你可以根据个人需求修改它. 打包后的index.html将产生在dist文件夹)<br>
    - reducers.js (reducer文件)<br>
+ /static (开发环境的 静态资源文件夹, 打包后将在dist文件夹生成生产环境的static文件夹)
+ .babelrc (babel配置文件, 为什么有两个这玩意请参考webpack2官方文档中热加载那一块,底部有链接)
+ package.json 
+ README.md 
+ webpack.dev.config.js (开发环境配置) 
+ webpack.prod.config.js (生产环境配置) 
  

### 开发环境功能:
*   模块热加载(HMR)
*   source-map
*   基于babel的es6代码编译
*   less自动编译
*   react-router的基本配置
*   redux的基本配置

### 生产环境功能:
*   UglifyJsPlugin代码压缩
*   压缩css代码
*   分离库代码(如react)
*   自动生成webpack-assets.json文件, 方便查看打包完成后的文件名(无需手动粘贴替换script的src)
*   可配置的模板html(可以配置符合项目需求的index.html并自动插入script路径), 打包后生成最终的html文件
*   打包图片等静态资源(低于10k转换为base64编码), 生成md5文件名
*   打包生成md5文件名的js主文件(方便去缓存)

### 使用:

#### 开发: 
1.  **npm install** 安装依赖包
2.  **npm run dev** 执行开发命令
3.  打开pc或者手机浏览器,输入ip地址和8080端口 (如:192.168.1.100:8080)
4.  愉快的写代码吧

#### 打包:
1.  **npm run build** 执行打包命令
2.  等待打包完毕, 根目录下会生成一个dist文件夹, 部署到线上即可
3.  等待产品新需求, 重复执行开发-打包-开发-打包...   :(

# :)
---------------------------------------
参考: <br>
<a href="https://doc.webpack-china.org/concepts/">webpack2 中文文档</a><br>
<a href="https://doc.webpack-china.org/guides/hmr-react/">webpack2 模块热替换文档</a>