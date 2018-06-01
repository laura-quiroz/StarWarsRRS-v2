import { connect } from 'react-redux'
import StarWarsScene from '../scenes/starwars.scene'

const mapStateToProps = state => ({
  hello: 'Hello Star Wars!!'
})

export default connect(mapStateToProps)(StarWarsScene)
