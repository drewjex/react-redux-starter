import { connect } from 'react-redux'
import ToggleMenu from '../components/ToggleMenu'
import { toggleClick } from '../actions'


const mapStateToProps = state => ({
  status: state.togglemenus
})

const mapDispatchToProps = dispatch => ({
  toggleClick: () => dispatch(toggleClick())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleMenu)
