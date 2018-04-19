const tests = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return state+1;
      case 'RESET_COUNTER':
        return 0;
      case 'INCREMENT_COUNTER_BY_AMOUNT':
        return state + action.amount;
      default:
        return state
    }
  }
  
  export default tests
  