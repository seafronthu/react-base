import { all } from 'redux-saga/effects'
import * as changeTodoData from './changeTodoData'
export default function* rootSaga () {
  yield all([
    changeTodoData.watchIncreaseTodoDataAsync()
  ])
}