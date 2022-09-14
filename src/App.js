import TodoTemplate from "./Component/TodoTemplate";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import {useReducer, useCallback, useRef, useState} from "react";

function createBulkTodos(){
    const array = [];
    for(let i=0; i<= 1000; i++){
        array.push({
            id: i,
            text: `할일 ${i}`,
            checked: false
        })
    }
    return array;
}

function todoReducer(todos, action){
    switch (action.type){
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map(todo =>
                todo.id === action.id ? {... todo, checked : !todo.checked} : todo,
            );
        default:
            return todos;
    }
}

const App = () => {
    let [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        dispatch({ type: 'INSERT', todo });
        nextId.current += 1;
    },[]);

    const onRemove = useCallback(id => {
        dispatch({ type: 'REMOVE', id });
    },[]);

    const onToggle = useCallback(id => {
        dispatch({ type: 'TOGGLE', id });
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
}

export default App;
