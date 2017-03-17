import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { sendMsg } from 'Actions'

class Info extends Component {
  componentDidMount() {
    const that = this
    setTimeout(function(){
      that.props.dispatch(sendMsg('哈哈哈'))
    },3000)
  }
  /* 组件中通过this.props.msg拿到store里的msg字段的值并响应地展示在页面里 */
  render() {
    return (
      <div className="wrapper">
        <h3>{this.props.msg ? this.props.msg : 'No message'}</h3>
        <br />
        <Link className="route-link" to="/">回到首页</Link>
      </div>
    )
  }
}

/* 
  注入 dispatch 和 store
  只要 Redux store 发生改变，mapStateToProps 函数就会被调用
*/
function mapStateToProps(store) {
  return {
    msg: store.msg
  }
}

export default connect(mapStateToProps)(Info)