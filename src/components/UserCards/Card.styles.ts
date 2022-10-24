import styled, { css } from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 5.5rem;
  background: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme["gray-100"]};
  border-radius: 8px;

  strong {
    flex: 1;
    font-weight: 700;
    font-size: 1.25rem;
    margin-left: 3rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Edit = styled.button`
  width: 3rem;
  height: 3rem;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
