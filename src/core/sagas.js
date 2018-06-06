import { takeLatest, call, put } from 'redux-saga/effects'
import Actions from './actions'
import axios from 'axios'

function starwarsF(name) {
  return axios({
    method: 'get',
    url: `https://swapi.co/api/${name}`
  })
}

function* mostdesp(action) {
  try {
    yield put({ type: Actions.Mostrar, activeItem: action.activeItem })
    const response = yield call(starwarsF, action.payload)
    const starWars = response.data
    yield put({ type: 'API_CALL_SUCCESS', payload: starWars })
  } catch (error) {
    yield put({ type: Actions.API_CALL_FAILURE, error })
  }
}

function* watchdesp() {
  yield takeLatest(Actions.API_CALL_REQUEST, mostdesp)
}

export default watchdesp
