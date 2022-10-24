import styled from "styled-components";

export const DivContainer = styled.div`
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const ItemsFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  select,
  input {
    width: 17rem;
    height: 3rem;
    border-radius: 8px;
  }
`;

export const ButtonContainer = styled.button`
  width: 17rem;
  height: 3rem;
  font-weight: 500;
  font-size: 2rem;
  border: none;
  border-radius: 8px;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
