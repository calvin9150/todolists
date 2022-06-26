import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todosState, TodoTypes } from "../recoil/todo";
import TodoItem from "./TodoItem";

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useRecoilState<TodoTypes[]>(todosState);

  const onComplete = (id: number): void => {
    setTodos(
      todos.map((todo: TodoTypes) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
      })
    );
  };

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo: TodoTypes) => todo.id !== id));
  };

  console.log(todos);

  return (
    <Container>
      {todos.length > 0 ? (
        todos.map((todo: TodoTypes) => {
          const { id, contents, isCompleted } = todo;

          return (
            <TodoItem
              key={id}
              id={id}
              contents={contents}
              isCompleted={isCompleted}
              onComplete={onComplete}
              onDelete={onDelete}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })
      ) : (
        <div className="noList">Todo가 없습니다. 자유롭게 추가해보세요!</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 500px;
  max-height: 500px;
  position: relative;
  border: 2px solid white;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;

  .noList {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default TodoList;
