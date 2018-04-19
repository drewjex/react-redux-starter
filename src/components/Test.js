import React from 'react'
import PropTypes from 'prop-types'

// const spanStyle = {
//     margin: '40px',
//     fontSize: '15px'
// }

const Test = ({counter, reset}) => (
  <div style={{margin: '10px'}}>
    <span style={{
        fontSize: '14px',
    }}>
        COUNTER: {counter}
        <button onClick={() => reset()}> RESET COUNTER</button>
    </span>
  </div>
)

Test.propTypes = {
    counter: PropTypes.number.isRequired
}

export default Test
