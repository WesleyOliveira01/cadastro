import React from "react";
import Input from "./Input";
import useFormulario from "@/contexts/form";
import Selects from "./Selects";

const Form = () => {
  const {
    setNome,
    setEmail,
    setRg,
    setCpf,
    setTelefone,
    handleSubmit,
    setDataNascimento,
    setRua,
    setCep,
    setComplemento,
    setNumero,
    rua,
    cep,
  } = useFormulario();

  const handleEndereco = (cep: string) => {
     fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setRua(data.logradouro)
      });
  };

  return (
    <section className="p-2">
      <h1 className="font-bold text-defaultColor mb-3 text-center text-xl">
        Preencha os dados abaixo para realizarmos seu cadastro
      </h1>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[95%] lg:w-[65%] shadow-md rounded-lg p-4 mx-auto"
      >
        <Input
          name="nome"
          titulo="Nome completo"
          placeholder="insira seu nome completo"
          type="text"
          required
          onChange={(e) => setNome(e.target.value.replace(/\b\w/g, (match) => match.toUpperCase()))}
        />

        <section className="flex flex-col lg:flex-row gap-2">
          <Input
            name="CPF"
            titulo="CPF"
            placeholder="insira seu CPF"
            maxLength={11}
            type="number"
            required
            onChange={(e) => setCpf(Number(e.target.value.replace(/\D/g, "")))}
            w="lg:w-[50%]"
          />
          <Input
            name="RG"
            titulo="RG"
            placeholder="insira seu RG"
            type="number"
            required
            w="lg:w-[50%]"
            onChange={(e) => setRg(Number(e.target.value.replace(/\D/g, "")))}
          />
        </section>

        <Input
          name="dataNascimento"
          titulo="selecione sua data de nascimento"
          type="date"
          required
          onChange={(e) => setDataNascimento(e.target.value)}
        />

        <Input
          name="email"
          titulo="E-mail"
          placeholder="insira seu E-mail"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />

        <Input
          name="celular"
          titulo="Celular"
          placeholder="insira seu celular"
          type="tel"
          required
          onChange={(e) => setTelefone(Number(e.target.value))}
        />

        <section className="flex lg:flex-row flex-col gap-2">
          <Input
            name="rua"
            titulo="Rua"
            placeholder="insira o nome da rua"
            type="text"
            value={rua}
            required
            onChange={(e) => setRua(e.target.value)}
            w="lg:w-[50%] w-full"
          />
          <Input
            name="numero"
            titulo="Numero"
            type="number"
            required
            onChange={(e) => setNumero(Number(e.target.value))}
            w="lg:w-[50%] w-full"
          />
          <Input
            name="complemento"
            titulo="complemento"
            placeholder="numero da casa"
            type="text"
            onChange={(e) => setComplemento(e.target.value)}
            w="lg:w-[50%] w-full"
          />
          <Input
            name="CEP"
            titulo="CEP"
            placeholder="ex: 05271240"
            type="number"
            required
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
            w="lg:w-[50%] w-full"
            onBlur={() => handleEndereco(cep)}
          />
        </section>

        <Selects />

        <button className="w-full p-3 bg-defaultColor text-textColor font-bold rounded-md hover:opacity-80 duration-300">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
