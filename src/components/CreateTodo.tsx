import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
    saveTodo: ({ title }: TodoTitle) => {}
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({ title: inputValue })
        setInputValue('')
    } 

    return ( 
     <form onSubmit={handleSubmit}>
           <input
            className='new-todo'
            value={inputValue}
            onChange={(e)=> { setInputValue(e.target.value) }}
            placeholder='¿Qué hay por hacer?'
        />
     </form>
    )
}