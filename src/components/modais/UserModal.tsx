import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Button } from "../Button";
import { DivContainer, ItemsFormContainer } from "./UserModal.styles";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";

interface UserModalProps {
  closeModal: Function;
  userData?: User;
}

const newUserValidationSchema = zod.object({
  name: zod.string().min(1, "Informe um nome válido"),
  email: zod
    .string()
    .min(1, "Informe a sua senha")
    .email("Informe um e-mail válido"),
  password: zod.string().min(5, "Sua senha deve conter 5 digitos"),
  age: zod.any(),
  sex: zod.string(),
  cityId: zod.string(),
  stateId: zod.string(),
});

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  sex: string;
  cityId: string;
  stateId: string;
};

export function UserModal({ closeModal, userData }: UserModalProps) {
  const methods = useForm<User>({
    resolver: zodResolver(newUserValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: undefined,
      sex: "",
      cityId: undefined,
      stateId: undefined,
    },
  });

  const { handleSubmit, formState, setValue, getValues, watch } = methods;

  const [cities, setCities] = useState(undefined);
  const [states, setState] = useState(undefined);

  const stateId = watch("stateId");
  watch("cityId");

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("email", userData.email);
      setValue("password", userData.password);
      setValue("age", userData.age);
      setValue("sex", userData.sex);
      setValue("cityId", String(userData.cityId));
      setValue("stateId", String(userData.stateId));
    }
  }, [userData]);

  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:3333/states`).then((response) => {
        setState(response.data);
      });
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      await axios
        .get(`http://localhost:3333/cities?id=${stateId}`)
        .then((response) => {
          setCities(response.data);
        });
    }
    stateId && getData();
  }, [stateId]);

  const { errors } = formState;

  async function handleCrateNewUser(data: User) {
    console.log(data);
    try {
      console.log(userData);
      if (userData) {
        console.log("acessou");
        await axios.put(`http://localhost:3333/users/${userData.id}`, {
          name: data.name,
          email: data.email,
          password: data.password,
          age: data.age,
          sex: data.sex,
          cityId: Number(data.cityId),
          stateId: Number(data.stateId),
        });

        toast.success("Usuário Editado com sucesso");
      } else {
        await axios.post("http://localhost:3333/users", {
          name: data.name,
          email: data.email,
          password: data.password,
          age: data.age,
          sex: data.sex,
          cityId: Number(data.cityId),
          stateId: Number(data.stateId),
        });

        toast.success("Usuário Criado com sucesso");
      }

      closeModal();
    } catch (error) {
      toast.error("Erro ao criar usuário");
    }
  }

  return (
    <DivContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleCrateNewUser)}>
          <Input label="Nome" id="name" errorMessage={errors.name?.message} />
          <Input
            label="Email"
            id="email"
            errorMessage={errors.email?.message}
          />
          <Input
            label="Senha"
            id="password"
            errorMessage={errors.password?.message}
          />
          <Input label="Idade" id="age" errorMessage="" />
          <Input label="Sexo" id="sex" errorMessage={errors.sex?.message} />

          <Select
            label={"Estado"}
            id={"stateId"}
            errorMessage={errors.stateId?.message}
            data={states}
          />

          <Select
            label={"Cidade"}
            id={"cityId"}
            errorMessage={errors.cityId?.message}
            data={cities ? cities : []}
          />

          <Button label="Enviar Dados" />
        </form>
      </FormProvider>
    </DivContainer>
  );
}
