import React, { FormEvent, useState } from "react";
import Input from "./Input";
import Option from "./Option";
import { useRouter } from "next/navigation";


interface Iusuario {
  nome: string;
  cpf: number;
  rg: number;
  telefone: number;
  email: string;
  endereco: string;
  plano: string;
  taxa:string
}

const Form = () => {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [plano, setPlano] = useState("");
  const [taxa, setTaxa] = useState("");

  const [telefone, setTelefone] = useState<number | null>();
  const [cpf, setCpf] = useState<number | null>();
  const [rg, setRg] = useState<number | null>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usuario: Iusuario = {
      nome: nome,
      cpf: cpf as number,
      rg: rg as number,
      telefone: telefone as number,
      email: email,
      endereco: endereco,
      plano: plano,
      taxa:taxa
    };
    fetch("/api/supabase",{
      method:"POST",
      body:JSON.stringify(usuario),
      headers:{
        "content-type":"application/json"
      }
    })
    router.push("cadastroConcluido");
    console.log(usuario)
  };

  return (
    <section className="p-2">
      <h1 className="font-semibold text-sky-500 mb-3 text-center text-xl">
        Prencha os dados abaixo para realizarmos seu cadastro
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

        <Input
          name="CPF"
          titulo="CPF"
          placeholder="insira seu CPF"
          maxLength={11}
          type="number"
          required
          onChange={(e) => setCpf(Number(e.target.value))}
        />

        <Input
          name="RG"
          titulo="RG"
          placeholder="insira seu RG"
          type="number"
          required
          onChange={(e) => setRg(Number(e.target.value))}
        />

        <Input
          name="email"
          titulo="email"
          placeholder="insira seu E-mail"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          name="celular"
          titulo="celular"
          placeholder="insira seu celular"
          type="tel"
          required
          onChange={(e) => setTelefone(Number(e.target.value))}
        />

        <Input
          name="endereco"
          titulo="endereço"
          placeholder="insira seu endereço"
          type="text"
          required
          onChange={(e) => setEndereco(e.target.value)}
        />

        <section className="flex flex-col lg:flex-row items-center justify-between">
          <section className="my-4 lg:w-[45%] w-full">
            <label htmlFor="planos" className="text-sky-500 block font-semibold">
              Selecione o plano desejado
            </label>
            <select
              required
              name="planos"
              id="planos"
              className="bg-slate-300 p-3 outline-none rounded-md  w-full"
              onChange={(e) => setPlano(e.target.value)}
            >
              <Option value="" />
              <Option value="300 mega" plano="300 mega" valorPlano="R$ 99,90" />
              <Option value="400 mega" plano="400 mega" valorPlano="R$ 119,90" />
              <Option value="500 mega" plano="500 mega" valorPlano="R$ 149,90" />
              <Option value="600 mega" plano="600 mega" valorPlano="R$ 189,90" />
              <Option value="" />
              <Option
                value="300 + telelefone"
                plano="300 mega + telefone fixo"
                valorPlano="R$ 127,90"
              />
              <Option
                value="400 + telelefone"
                plano="400 mega + telefone fixo"
                valorPlano="R$ 147,90"
              />
              <Option
                value="500 + telelefone"
                plano="500 mega + telefone fixo"
                valorPlano="R$ 177,90"
              />
              <Option
                value="600 + telelefone"
                plano="600 mega + telefone fixo"
                valorPlano="R$ 217,90"
              />
            </select>
          </section>
          <section className="my-4 lg:w-[45%] w-full">
            <label htmlFor="taxa" className="text-sky-500 block font-semibold">
             forma de pagamento da taxa de instalação
            </label>
            <select
              required
              name="taxa"
              id="taxa"
              className="bg-slate-300 p-3 outline-none rounded-md  w-full"
              onChange={(e) => setTaxa(e.target.value)}
            >
              <Option value="" />
              <Option value="a vista" plano="R$" valorPlano="150,00 A VISTA" />
              <Option value="a prazo" plano="R$" valorPlano="195,00 EM ATÉ 3X NO CARTÃO DE CREDITO" />
          
            </select>
          </section>
        </section>

        <button className="w-full p-3 bg-sky-500 text-slate-100 font-bold rounded-md">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Form;
