import TodoTemplate from "./Component/TodoTemplate";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import {useCallback, useRef, useState} from "react";

function App() {
    let [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 공부하기',
            checked: true
        },
        {
            id: 2,
            text: '컴포넌트 스타일링하기',
            checked: true
        },
        {
            id: 3,
            text: '일정관리 앱 만들기',
            checked: false
        },
    ])

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    },[todos]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;
