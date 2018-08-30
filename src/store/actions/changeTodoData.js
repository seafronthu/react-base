import { createAction } from 'redux-actions'
import { types } from '../types'
// 增加todo
const actionIncreaseTodoData = (name) => {
 // do something
  return {
    nameArr: [{
      key: new Date().getTime(),
      name
    }]
  }
}
// 删除指定todo
const actionDecreaseTodoData = (state, key) => {
 let nameArr = []
 if (state instanceof Array || Object.prototype.toString.call(state) === '[object Array]') {
    nameArr = state.filter( v => v.key !== key)  // state指针地址和reducer里面的state指针地址相同 小心浅拷贝哦！
  return {
    nameArr
  }
 } else {
  return {
    nameArr: []
  }
 }
}
export const changeTodoData = {
  actionIncreaseTodoData: createAction(types['INCREASE_TODO_DATA'],actionIncreaseTodoData),
  actionIncreaseTodoDataAsync: createAction(types['INCREASE_TODO_DATA_START'],actionIncreaseTodoData), // 异步增加 todo
  actionDecreaseTodoData: createAction(types['DECREASE_TODO_DATA'],actionDecreaseTodoData)
}