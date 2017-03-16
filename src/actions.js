/* 常量 */
export const SEND_MSG = 'SEND_MSG'


/* 创建函数 */
export function sendMsg(msg) {
  return {
    type: SEND_MSG,
    msg
  }
}