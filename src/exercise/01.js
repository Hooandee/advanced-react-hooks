// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return {count: state.count + action.step}
  }
  return {...state, ...(typeof action === 'function' ? action(state) : action)}
}

function Counter({initialCount = 0, step = 1}) {
  const [{count}, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
