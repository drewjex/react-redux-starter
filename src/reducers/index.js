import { combineReducers } from 'redux'
import todos from './todos'
import tests from './tests'
import togglemenus from './togglemenus'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  tests,
  togglemenus
})
