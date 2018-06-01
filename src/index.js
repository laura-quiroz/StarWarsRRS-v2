import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import registerServiceWorker from './registerServiceWorker'
import StarWars from './containers/starwars.container'
import acciones from './core/actions'
import rootSaga from './core/sagas'

const sagaMiddleware = createSagaMiddleware()

const reducerSW = (state, action) => {}

const storeSW = createStore(
  reducerSW,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
ReactDOM.render(
  <Provider store={storeSW}>
    <StarWars />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
