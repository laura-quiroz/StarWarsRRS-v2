import { connect } from 'react-redux'
import StarWarsScene from '../scenes/starwars.scene'
import Actions from '../core/actions'

const mapStateToProps = state => ({
  hello: 'Star Wars with Redux-Saga!!',
  activeItem: state.activeItem,
  starwars: state.starwars,
  stateL: state.loading,
  errorL: state.error
})

const mapDispatchToProps = dispatch => ({
  Mostrar2: name =>
    dispatch({
      type: Actions.API_CALL_REQUEST,
      activeItem: name,
      payload: name
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(StarWarsScene)
