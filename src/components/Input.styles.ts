import styled from "styled-components";

interface InputContainerProps {
  width: number;
  height: number;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    color: ${(props) => props.theme["gray-100"]};
  }

  span {
    color: ${(props) => props.theme.danger};
  }

  input {
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    border-radius: 10px;
    border: 1px solid ${(props) => props.theme["gray-100"]};

    padding: 24px;
  }
`;
