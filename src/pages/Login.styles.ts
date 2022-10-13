import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.fontColor};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.primary};
  }
  &::placeholder {
    color: ${(props) => props.theme.borderColor};
  }
`;

export const Input = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
