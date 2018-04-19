import React from 'react'

const ToggleMenu = ({status, toggleClick}) => (
  <div>
    <span style={{visibility : status ? 'visible' : 'hidden'}}>MENU</span>
    <button onClick={() => toggleClick()}>TOGGLE VISIBILITY</button>
  </div>
)

export default ToggleMenu
