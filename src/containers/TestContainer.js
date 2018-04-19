import { connect } from 'react-redux'
import Test from '../components/Test'
import { resetCounter } from '../actions'

const mapStateToProps = state => ({
    counter: state.tests
})

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetCounter())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)
