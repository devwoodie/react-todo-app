### [React-todo-app]
`Study-Project`

- **Use Stack**
  - React(function Component)
    - Hooks
  - SCSS
  
- **Detailed Description**
```

velopert님의 [리액트를 다루는 기술] 에서 진행한 Todo 앱을 구현했습니다.

[ Component 설명]

1. TodoTemplate : 화면 전체 템플릿이며, 앱 타이틀을 보여줍니다. 
children으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다.

2. TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다. 
state를 통해 input의 상태를 관리합니다.

3. TodoListItem : 각 할 일 항목에 대한 정보를 보여주는 컴포넌트 입니다. 
todo객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여 줍니다.

4. TodoList : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 
여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.

```

![image](https://user-images.githubusercontent.com/86578755/189834723-0db16bf2-0a63-43d3-ab33-b846692bf146.png)

