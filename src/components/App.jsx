import React, { Component } from 'react'
import { Link } from 'react-router'
import { sendMsg } from '../actions'
import { connect } from 'react-redux'

import css from './app.less'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e) {
    this.setState({
      msg: e.target.value
    })
  }
  handleClick() {
    if( this.state.msg.trim() ){
      this.props.dispatch(sendMsg(this.state.msg))
      this.refs.userInput.value = ''
    }
  }
  render() {
    // 下面这张图小于10k, 将被转换为base64编码
    const imgUrl = require("../../static/icon.png")
    return (
      <div className="wrapper">
        <h3>Webpack react react-router redux</h3>
        <h4>小于10k的图片转换为base64:</h4>
        <img src={imgUrl} />
        <h4>大于10k的图片不转为base64:</h4>
        <div className="amanda"></div>
        <input type="text" ref="userInput" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Dispatch message</button><br />
        <Link className="route-link" to="info">去info页面查看message</Link>
      </div>
    )
  }
}

/* 只注入 dispatch，不监听 store */
export default connect()(App)