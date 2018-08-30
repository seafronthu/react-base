import React from 'react'
import ReactDOM from 'react-dom'

// import registerServiceWorker from './registerServiceWorker'
import FristContainerRoute from './routes'
import './utils/adaptToSize'
import './style/index.styl'
import './style/common.css'
ReactDOM.render(
    <FristContainerRoute />
, document.getElementById('root'));
// registerServiceWorker();
