import React, { FC, ChangeEvent, Dispatch, SetStateAction, FormEvent } from 'react';
import { IFormProps } from '../Interfaces';
import { v4 as uuidv4 } from 'uuid';


const Form: FC<IFormProps> = ({ inputText, setInputText, todos, setTodos, setStatus, inputTitle, setInputTitle }) => {
    const inputTextHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputText(e.target.value)
    }
    const inputTitleHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputTitle(e.target.value)
    }
    const submitTodoHandler = (e: FormEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(inputTitle !== '' && inputText !== '') {
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    title: inputTitle,
                    description: inputText,
                    completed: false
                }
            ])
        }
        setInputText('')
        setInputTitle('')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
            <div className='todo-input-con'>
                <div>
                    <input onChange={inputTitleHandler} placeholder='Title' value={inputTitle} type="text" className="todo-input" />
                    <input onChange={inputTextHandler} placeholder='Description' value={inputText} type="text" className="todo-input" /> 
                </div>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">Add</button>
            </div>
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </form>
    )
}

export default Form