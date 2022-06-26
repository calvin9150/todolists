import { SetterOrUpdater } from "recoil";
import styled from "styled-components";
import { TodoTypes } from "../recoil/todo";

import { FaPen } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useState } from "react";

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  todos: TodoTypes[];
  setTodos: SetterOrUpdater<TodoTypes[]>;
}

const TodoItem = ({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todos,
  setTodos,
}: PropTypes): JSX.Element => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>("");

  const onModify = () => {
    setIsModal(true);
    setModifyContents(contents);
  };

  const onModifyTodo = () => {
    if (!modifyContents.trim()) {
      return;
    }

    // Todo 업데이트 확인을 눌렀을때 객체 업데이트
    setTodos(
      todos.map((todo: TodoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      })
    );

    setIsModal(false);
  };

  return (
    <Container>
      <div
        title={contents}
        className={isCompleted ? "TodoItem-Completed" : ""}
        onClick={() => onComplete(id)}
      >
        {contents}
      </div>

      <div className="TodoItem-Icons">
        <FaPen className="TodoItem-Icons-Pen" onClick={onModify} />
        <MdClose className="TodoItem-Icons-Close" onClick={() => onDelete(id)} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;

  -moz-user-select: none;
  -webkit-user-drag: none;

  &-Completed {
    text-decoration-line: line-through;
    text-decoration-color: var(--red);
  }

  & > * {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  &-Icons {
    display: flex;
    display: -webkit-flex;
    align-items: center;

    &-Pen {
      color: var(--green);
    }

    &-Close {
      color: var(--red);
      font-size: 1.9rem;
    }
  }
`;

export default TodoItem;
