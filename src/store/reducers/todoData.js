import { handleActions } from 'redux-actions'
import { types } from '../types'
const initialState = {
  nameArr: [],
  value: ''
}
const actions = {}
const increaseTodoDataFunc = (state, action) => {
  return {
    nameArr: [...action.payload.nameArr, ...state.nameArr, ],
    value: state.value
  }
}
const decreaseTodoDataFunc = (state, action) => {
  return {
    nameArr: action.payload.nameArr,
    value: state.value
  }
}
// 异步请求数据的时候开始
const reqTodoDataFuncStart = (state, action) => {
  return {
    ...state,
    value: '请求中……'
  }
}
// 异步请求数据的时候结束
const reqTodoDataFuncEnd = (state, action) => {
  return {
    nameArr: [...state.nameArr, ...action.payload.nameArr],
    value: ''
  }
}
actions[types.INCREASE_TODO_DATA] = increaseTodoDataFunc
actions[types.DECREASE_TODO_DATA] = decreaseTodoDataFunc
actions[types.INCREASE_TODO_DATA_START] = reqTodoDataFuncStart
actions[types.INCREASE_TODO_DATA_END] = reqTodoDataFuncEnd
export default handleActions(actions, initialState)