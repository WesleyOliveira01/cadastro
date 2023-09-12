import React from "react";
import Input from "./Input";
import Option from "./Option";
import useFormulario from "@/contexts/form";
import Selects from './Selects';

const Form = () => {
 
  const {
    //@ts-ignore
    setNome,
    //@ts-ignore
    setEmail,
    //@ts-ignore
    setRg,
    //@ts-ignore
    setCpf,
    //@ts-ignore
    setEndereco,
    //@ts-ignore
    setTelefone,   
    //@ts-ignore
    handleSubmit,
    //@ts-ignore
    setDataNascimento
  }= useFormulario() ;

  return (
    <section className="p-2">
      <h1 className="font-semibold text-sky-500 mb-3 text-center text-xl">
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
          onChange={(e) => setNome(e.target.value)}
        />

        <section className="flex flex-col lg:flex-row gap-2">
          <Input
            name="CPF"
            titulo="CPF"
            placeholder="insira seu CPF"
            maxLength={11}
            type="number"
            required
            onChange={(e) => setCpf(Number(e.target.value))}
            w="lg:w-[50%]"
          />
          <Input
            name="RG"
            titulo="RG"
            placeholder="insira seu RG"
            type="number"
            required
            w="lg:w-[50%]"
            onChange={(e) => setRg(Number(e.target.value))}
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
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          name="celular"
          titulo="Celular"
          placeholder="insira seu celular"
          type="tel"
          required
          onChange={(e) => setTelefone(Number(e.target.value))}
        />

        <Input
          name="endereco"
          titulo="Endereço"
          placeholder="insira seu endereço"
          type="text"
          required
          onChange={(e) => setEndereco(e.target.value)}
        />

        <Selects />
        
        <button className="w-full p-3 bg-sky-500 text-slate-100 font-bold rounded-md hover:opacity-80 duration-300">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
