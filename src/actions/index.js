let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
})

export const incrementCounterByAmount = amount => ({
  type: 'INCREMENT_COUNTER_BY_AMOUNT',
  amount: amount
})

export const resetCounter = () => ({
  type: 'RESET_COUNTER'
})

export const toggleClick = () => ({
  type: 'TOGGLE_MENU'
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
