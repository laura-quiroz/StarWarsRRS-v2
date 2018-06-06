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

const initialState = {
  loading: false,
  starwars: false,
  error: false,
  activeItem: 'people'
}

const reducerSW = (state = initialState, action) => {
  switch (action.type) {
    case acciones.Mostrar:
      return {
        ...state,
        activeItem: action.activeItem,
        payload: action.payload
      }
    case acciones.API_CALL_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case acciones.API_CALL_SUCCESS:
      return {
        ...state,
        loading: false,
        starwars: action.payload,
        error: false
      }
    case acciones.API_CALL_FAILURE:
      return {
        ...state,
        loading: false,
        payload: null,
        error: true
      }
    default:
      return state
  }
}

const storeSW = createStore(
  reducerSW,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={storeSW}>
    <StarWars />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
