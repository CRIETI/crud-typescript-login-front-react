import { ButtonContainer, ButtonVariants } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariants;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  width?: number;
  height?: number;
  label: string;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  width = 416,
  height = 72,
  label,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      width={width}
      height={height}
      onClick={onClick}
      {...rest}
    >
      {label}
    </ButtonContainer>
  );
}
