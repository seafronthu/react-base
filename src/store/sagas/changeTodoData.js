import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { types } from '../types'
function* increaseTodoDataAsync (action) {
  yield call(delay, 2000)
  yield put({      // dispatch一个action到reducer， payload是请求返回的数据
    type: types['INCREASE_TODO_DATA_END'],
    payload: action.payload   
  })
}
export function* watchIncreaseTodoDataAsync () {
  yield takeEvery(types['INCREASE_TODO_DATA_START'], increaseTodoDataAsync)
}
