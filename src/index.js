/*  
  入口文件 
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import message from './reducers'
import { sendMsg } from 'Actions'
import { AppContainer } from 'react-hot-loader'

/* 引入公共样式 */
import css from './common.less'

/* 引入组件 */
import App from './components/App'
import Info from './components/Info'

/* 创建 store */
let store = createStore(message)
console.log(store.getState())

/* 监听store变化, 每当dispatch发生时,此函数将被调用 */
store.subscribe(function() {
  console.info(store.getState())
})

/* routes */
const routes = (
  <div>
    <Route path="/" component={App} />
    <Route path="info" component={Info} />
  </div>
)

/*
  <Provider store>使组件层级中的 connect() 方法都能够获得 Redux store
*/
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={hashHistory}>
          { routes }
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

/* hot module reload */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
