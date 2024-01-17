import { useState } from 'react'
import { mockTodos } from './mocks/mocks.ts'
import { Todos } from './components/Todos.tsx'
import { type TodoId, type Todo as TodoType, type TodoCompleted } from './types'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
   <div className='todoapp'>
     <Todos
     onToggleCompletedTodo={handleCompleted}
     onRemoveTodo={handleRemove}
     todos={todos}/>
   </div>
  )
}

export default App
