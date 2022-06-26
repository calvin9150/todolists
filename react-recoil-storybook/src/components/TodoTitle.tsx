import { FC } from "react";
import { GiWireCoil } from "react-icons/gi";
import styled from "styled-components";

const TodoTitle = (): JSX.Element => {
  return (
    <Container>
      <GiWireCoil className="icon" />
    </Container>
  );
};

export default TodoTitle;

const Container = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 10px;

  .icon {
    margin-right: 8px;
  }
`;
