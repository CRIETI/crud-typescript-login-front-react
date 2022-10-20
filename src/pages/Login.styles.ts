import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  img {
    height: 100vh;
  }

  form {
    max-width: 26rem;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 32px;
  }

  span {
    color: red;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
