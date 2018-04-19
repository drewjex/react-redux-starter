import { connect } from 'react-redux'
import Test from '../components/Test'
import { resetCounter } from '../actions'

const mapStateToProps = state => ({
    counter: state.tests,
    todos: state.todos //also has access to todo from state
})

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(resetCounter())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)
