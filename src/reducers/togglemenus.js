const togglemenus = (state = false, action) => {
    switch (action.type) {
      case 'TOGGLE_MENU':
        state = !state;
        return state;
      default:
        return state
    }
  }
  
  export default togglemenus
  