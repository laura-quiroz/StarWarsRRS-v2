import { connect } from 'react-redux'
import StarWarsScene from '../scenes/starwars.scene'
import Actions from '../core/actions'

const mapStateToProps = state => ({
  hello: 'Hello Star Wars!!',
  activeItem: state.activeItem
})

const mapDispatchToProps = dispatch => ({
  Mostrar: name =>
    dispatch({
      type: Actions.Mostrar,
      activeItem: name
    }),
  Mostrar2: name =>
    dispatch({
      type: Actions.Mostrar2,
      activeItem: name
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(StarWarsScene)
