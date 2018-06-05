import { takeLatest, put } from 'redux-saga/effects'
import Actions from './actions'

function* mostdesp(action) {
  yield put({ type: 'ESPERANDO ' + action.activeItem })
  yield put({ type: Actions.Mostrar, activeItem: action.activeItem })
}

function* watchdesp() {
  yield takeLatest(Actions.Mostrar2, mostdesp)
}

export default watchdesp
