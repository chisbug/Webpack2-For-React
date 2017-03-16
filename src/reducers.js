import { combineReducers } from 'redux'
import { SEND_MSG } from './actions'

function msg(state = '', action) {
  switch (action.type) {
    case SEND_MSG:
      return action.msg
    default:
      return state
  }
}

/*  
  combineReducers函数可以组合多个reducer为一个reducer
  key将作为store中的key,value为上边的msg函数的返回值
*/
const message = combineReducers({
  msg
})

export default message