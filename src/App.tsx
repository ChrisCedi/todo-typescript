import { useState } from 'react'
import { mockTodos } from './mocks/mocks.ts'
import { Todos } from './components/Todos.tsx'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
   <div className='todoapp'>
     <Todos 
     onRemoveTodo={handleRemove}
     todos={todos}/>
   </div>
  )
}

export default App
