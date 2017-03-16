import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Info extends Component {
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

/* 把store对象中msg的值通过react-redux提供的connect方法注入组件 */
function mixState(store) {
  return {
    msg: store.msg
  }
}

export default connect(mixState)(Info)