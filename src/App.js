import TodoTemplate from "./Component/TodoTemplate";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import {useState} from "react";

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

    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
}

export default App;
