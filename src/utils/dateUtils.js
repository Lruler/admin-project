/*
包含n个日期时间处理的工具函数模块
*/

/*
  格式化日期
*/
export default function formateDate(time) {
  if (!time) return ''
  let date = new Date(time)
  if (date.getMinutes() < 10)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      + ' ' + date.getHours() + ':0' + date.getMinutes() + ':' + date.getSeconds()
  else if (date.getSeconds() < 10)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      + ' ' + date.getHours() + ':' + date.getMinutes() + ':0' + date.getSeconds()
  else
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}