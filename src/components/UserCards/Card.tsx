import styles from "./Card.module.css";
import { CardInfo } from "./CardInfo";

import { ContentContainer, DivContainer, Edit } from "./Card.styles";
import { Pencil } from "phosphor-react";

import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { User, UserModal } from "../modais/UserModal";

interface CardProps {
  data: User;
}

export function Card({ data }: CardProps) {
  const MySwal = withReactContent(Swal);

  const showSwal = () => {
    MySwal.fire({
      title: <strong>Editar Usuário</strong>,
      html: <UserModal closeModal={MySwal.close} userData={data} />,
      showConfirmButton: false,
    }).then(() => window.location.reload());
  };

  return (
    <DivContainer>
      <ContentContainer>
        <strong>{data.id}</strong>

        <CardInfo title="Nome" data={data.name} />
        <CardInfo title="Email" data={data.email} />
        <CardInfo title="Idade" data={data.age} />
        <CardInfo title="Sexo" data={data.sex} />

        <Edit title="Editar" onClick={showSwal}>
          {<Pencil size={32} />}
        </Edit>
      </ContentContainer>
    </DivContainer>
  );
}
