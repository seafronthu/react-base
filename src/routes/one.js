import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Loadable from 'react-loadable'

import Loading from '../components/loading'
import navList from '../utils/navList'
import delayRequest from '../utils/delayRequest'
const Home = Loadable({
  loader: () => import('../components/home'),
  loading: Loading,
})
const List = Loadable({
  // loader: () => import('../components/list'),
  loader: () => delayRequest(4000).then(() => import('../components/list')),
  loading: Loading,
  delay: 0,  // 多久之后出现loading
  // timeout: 10000
})
const Person = Loadable({
  loader: () => import('../components/person'),
  loading: Loading,
})
navList.map((v, i) => {
  if (i === 0) {
    v.component = Home
  } else if (i === 1) {
    v.component = List
  } else if (i === 2) {
    v.component = Person
  }
  return v
})
function One () {
  return (
    <Switch>
            {navList.map(v => (
              <Route exact={true} key={v.path} path={v.path} component={v.component}></Route>
            ))}
    </Switch>
  )
}
export default One