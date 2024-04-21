import React, { FC } from 'react';
import Todo from './Todo.tsx';
import {IListProps} from '../Interfaces';

const TodoList: FC<IListProps> = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.length > 0 ? filteredTodos.map(todo => (
                    <Todo 
                        title={todo.title} 
                        description={todo.description}
                        completed={todo.completed} 
                        id={todo.id} 
                        key={todo.id}
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                    />
                )) : 'Empty'}
            </ul>
        </div>
    )
}

export default TodoList;