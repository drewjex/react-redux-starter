import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';

// const spanStyle = {
//     margin: '40px',
//     fontSize: '15px'
// }

const Test = ({counter, todos, reset}) => (
  <div style={{margin: '10px'}}>
    <span style={{
        fontSize: '14px',
    }}>
        COUNTER: {counter}
        <button onClick={() => reset()}> RESET COUNTER</button>
        {todos.map(todo => {
            return (<Todo key={todo.id} {...todo} />)
        })}
    </span>
  </div>
)

Test.propTypes = {
    counter: PropTypes.number.isRequired
}

export default Test
