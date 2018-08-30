import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Dashboard from '../pages/dashboard'
import configureStore from '../store'
const store = configureStore()
const FristContainerRoute = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
export default FristContainerRoute