import { Title, DivContainer, Data } from "./CardInfo.styles";

interface CardInfoProps {
  title: string;
  data: string | number;
}

export function CardInfo({ title, data }: CardInfoProps) {
  return (
    <DivContainer>
      <Title>{title}</Title>
      <Data>{data}</Data>
    </DivContainer>
  );
}
