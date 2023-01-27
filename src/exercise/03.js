// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

// ----- CAN BE EXTRACTED INTO A DIFFERENT FILE -----
const CountProvier = ({children}) => {
  const [state, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={[state, setCount]}>
      {children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error('useCount must be used within its provider')
  }

  return context
}
// ----- END -----

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvier>
        <CountDisplay />
        <Counter />
      </CountProvier>
    </div>
  )
}

export default App
