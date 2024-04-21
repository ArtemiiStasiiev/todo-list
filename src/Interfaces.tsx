import React, { Dispatch, SetStateAction } from 'react';

export interface ITodoArr {
    id: string;
    title: string;
    description: string | null;
    completed: boolean;
}

export interface IFormProps {
    inputText: string;
    setInputText: Dispatch<SetStateAction<string>>;
    inputTitle: string;
    setInputTitle: Dispatch<SetStateAction<string>>;
    todos: ITodoArr[];
    setTodos: Dispatch<SetStateAction<ITodoArr[]>>
    setStatus: Dispatch<SetStateAction<string>>;
}

export interface IListProps {
    todos: ITodoArr[];
    setTodos: Dispatch<SetStateAction<ITodoArr[]>>;
    filteredTodos: any;
}

export interface ITodo {
    id: string;
    title: string;
    description: string | null;
    completed: boolean;
    todos: ITodoArr[];
    setTodos: any;
    todo: any;
}