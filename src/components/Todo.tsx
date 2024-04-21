import React, { FC } from 'react';
import { ITodo } from '../Interfaces';


const Todo: FC<ITodo> = ({ title, description, id, todos, todo, setTodos }) => {
    const deleteHandler = (): void => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`} id={id}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={completeHandler} className='done-btn'>{`${todo.completed ? 'Undone' : 'Done'}`}</button>
                <button onClick={deleteHandler} className='remove-btn'>Remove</button>
            </div>
        </li>
    )
}

export default Todo;