/*
  webpack 开发环境配置
*/
const path = require('path');
const webpack = require('webpack');
const WebWebpackPlugin = require('web-webpack-plugin');
const { WebPlugin, AutoWebPlugin } = WebWebpackPlugin;

module.exports = {
  entry: [
    /*
      开启 React 代码的模块热替换(HMR)
      为 webpack-dev-server 的环境打包代码,然后连接到指定服务器域名与端口
      为热替换(HMR)打包好代码
      only- 意味着只有成功更新运行代码才会执行热替换(HMR)
    */
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    /*
      配置输出的文件名称与路径
      对于HMR, publicPath是必须的, 让 webpack 知道在哪里载入热更新的模块(chunk)
    */
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  /*
    基础目录，绝对路径，用于从配置中解析入口起点(entry point)和加载器(loader)
  */
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-module-source-map',
  devServer: {
    /*
      hot: 启用 webpack 的模块热替换特性
      host: 配置可被外部通过ip地址访问
      contentBase: 输出文件的路径, 用于确定应该从哪里提供 bundle
      publicPath: 和上文 output 的“publicPath”值保持一致
    */
    hot: true,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 
          'style-loader', 
          'css-loader?minimize' 
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1,
              minimize: false
            } 
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          'url-loader?limit=10240'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          'url-loader?limit=10240'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Actions: path.resolve(__dirname, 'src/actions'),
      Static: path.resolve(__dirname, 'static')
    }
  },
  plugins: [
    /*
      开启全局的模块热替换(HMR)
      当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
      AssetsPlugin插件可以生成映射output的文件带hash值的json文件
      WebPlugin插件将output的js插入template生成index.html(开发环境下生成在express服务器上,生产环境才会真实生成html文件)
    */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new WebPlugin({
      filename: 'index.html',
      requires: ['main'],
      template: './src/index.html'
    })
  ]
};