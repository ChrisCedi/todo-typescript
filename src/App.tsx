 import { useState } from 'react'
import { mockTodos } from './mocks/mocks.ts'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  return (
    <Todos todos={todos}/>
  )
}

export default App
