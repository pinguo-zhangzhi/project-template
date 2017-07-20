// import 'es5-shim'
// import 'es6-shim'
// import 'es6-promise'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createHistory } from 'history'

import configureStore from './store/configure-store'

// Global styles
import './styles/index.css'
import 'antd/dist/antd.css'

console.log('React',React)
console.log('ReactDOM',ReactDOM)
console.log('History',History)
const store = configureStore({})
const history = syncHistoryWithStore(createHistory(), store)
import defaultRoutes from './routes'
const routes = defaultRoutes(store)
console.log('routes',routes)
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } >
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
)
