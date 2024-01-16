import {type Todo as todoType} from '../types'

interface Props extends todoType {
    onRemoveTodo: () => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo}) => {
    return (
        <div className='view'>
            <input className='toggle'
            checked={completed}
            type='checkbox'
            onChange={() => {}}/>
             <label>{title}</label>
            <button
                className='destroy'
                onClick={onRemoveTodo}/>
        </div>
    )
}
