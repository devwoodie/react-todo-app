import TodoTemplate from "./Component/TodoTemplate";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";

function App() {
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList />
        </TodoTemplate>
    );
}

export default App;
