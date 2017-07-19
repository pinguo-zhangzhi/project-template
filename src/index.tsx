// import 'es5-shim';
// import 'es6-shim'
// import 'es6-promise'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import configureStore from './store/configure-store'

// Global styles
import './styles/index.css'
// import 'antd/dist/antd.css';
let i = 0
console.log('i=' + i)
const store = configureStore({})
const history = syncHistoryWithStore(createBrowserHistory(), store)
import defaultRoutes from './routes'
const routes = defaultRoutes(store)
console.log('React',React)
console.log('ReactDOM',ReactDOM)
console.log('routes',routes)
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history } childRoutes={ routes } />
  </Provider>,
  document.getElementById('root')
)
