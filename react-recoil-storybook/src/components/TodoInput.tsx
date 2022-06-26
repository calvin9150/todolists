import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import { FaPen } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { todosState, TodoTypes } from "../recoil/todo";

const TodoInput = (): JSX.Element => {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useRecoilState<TodoTypes[]>(todosState);

  const addTodo = () => {
    if (!input.trim()) {
      return;
    }

    const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const todo: TodoTypes = {
      id: nextId,
      contents: input,
      isCompleted: false,
    };

    setTodos([...todos, todo]);

    setInput("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <Container>
      <input
        type="text"
        value={input}
        className="TodoInput-Input"
        placeholder="Todo를 입력해보세요!"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <FaPen className="button" onClick={addTodo} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid white;
  padding: 0 4px;

  Input {
    flex: 1;
    outline: none;
    border: none;
    color: white;
    background-color: var(--main);
    padding: 5px 2px;
    font-size: 1.2rem;

    &::placeholder {
      color: white;
    }
  }

  .button {
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

export default TodoInput;
