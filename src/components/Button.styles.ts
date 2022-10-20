import styled, { css } from "styled-components";

export type ButtonVariants = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariants;
  width: number;
  height: number;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: 18px;

  border-radius: 10px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  border: none;
`;
