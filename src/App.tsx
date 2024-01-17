import { useState } from 'react'
import { mockTodos } from './mocks/mocks.ts'
import { Todos } from './components/Todos.tsx'
import { type TodoId, type Todo as TodoType, type TodoCompleted, type FilterValue } from './types'
import { TODO_FILTERS } from './consts.ts'
import { Footer } from './components/Footer.tsx'

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

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

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.ALL) return todo
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
  })

  const handleClearTodosCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  return (
   <div className='todoapp'>
     <Todos
     onToggleCompletedTodo={handleCompleted}
     onRemoveTodo={handleRemove}
     todos={filteredTodos}/>
     <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      handleFilterChange={handleFilterChange}
      onClearCompleted={handleClearTodosCompleted}
     />
   </div>
  )
}

export default App
