import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import TestContainer from '../containers/TestContainer'
import ToggleMenuContainer from '../containers/ToggleMenuContainer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <TestContainer />
    <hr />
    <ToggleMenuContainer />
  </div>
)

export default App
