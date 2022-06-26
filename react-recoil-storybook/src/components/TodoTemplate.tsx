import React, { FC } from "react";
import styled from "styled-components";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoTitle from "./TodoTitle";

const TodoTemplate = (): JSX.Element => {
  return (
    <Container>
      <div className="contents">
        <TodoTitle />
        <TodoList />
        <TodoInput />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100vh;
  background-color: royalblue;
  display: flex;
  display: -webkit-flex;
  justify-content: center;

  .contents {
    margin: auto;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
  }
`;

export default TodoTemplate;
