import React from "react";
import Option from "./Option";
import useFormulario from "@/contexts/form";

const Selects = () => {
  //@ts-ignore
  const { setPlano, setTaxa, setComoConheceu, setDataVencimento, } = useFormulario();
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between gap-2">
        <section className="my-4 lg:w-[50%] w-full">
          <label
            htmlFor="planos"
            className="text-sky-500 block font-semibold my-2"
          >
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
            <Option value="" />
            <Option
              value="300 + telefone sem fidelidade"
              plano="300 mega + telefone fixo sem fidelidade"
              valorPlano="R$ 144,90"
            />
            <Option
              value="400 + telefone sem fidelidade"
              plano="400 mega + telefone fixo sem fidelidade"
              valorPlano="R$ 164,90"
            />
            <Option
              value="500 + telefone sem fidelidade"
              plano="500 mega + telefone fixo sem fidelidade"
              valorPlano="R$ 194,90"
            />
            <Option
              value="600 + telefone sem fidelidade"
              plano="600 mega + telefone fixo sem fidelidade"
              valorPlano="R$ 234,90"
            />
          </select>
        </section>

        <section className="my-4 lg:w-[50%] w-full">
          <label
            htmlFor="planos"
            className="text-sky-500 block font-semibold my-2"
          >
            Selecione a data de vencimento desejada
          </label>
          <select
            required
            name="planos"
            id="planos"
            className="bg-slate-300 p-3 outline-none rounded-md  w-full"
            onChange={(e) => setDataVencimento(e.target.value)}
          >
            <Option value="" />
            <Option value="10"  valorPlano="Dia 10" />
            <Option value="20"  valorPlano="Dia 20" />
            
            
          </select>
        </section>
        
      </section>

      <section className="flex flex-col lg:flex-row gap-2">
        <section className="my-4 lg:w-[50%] w-full">
            <label
              htmlFor="taxa"
              className="text-sky-500 block font-semibold my-2"
            >
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
              <Option
                value="a prazo"
                plano="R$"
                valorPlano="195,00 EM ATÉ 3X NO CARTÃO DE CREDITO"
              />
            </select>
          </section>
        <section className="my-4 lg:w-[50%] w-full">
          <label
            htmlFor="comoConheceu"
            className="text-sky-500 block font-semibold my-2"
          >
            como nos conheceu?
          </label>
          <select
            required
            name="taxa"
            id="taxa"
            className="bg-slate-300 p-3 outline-none rounded-md  w-full"
            onChange={(e) => setComoConheceu(e.target.value)}
          >
            <Option value="" />
            <Option value="Indicação" valorPlano="Indicação" />
            <Option value="Panfleto" valorPlano="Panfleto" />
            <Option value="Redes sociais" valorPlano="Redes sociais" />
            <Option value="Google" valorPlano="Google" />
            <Option value="Carro de som" valorPlano="Carro de som" />
          </select>
        </section>
      </section>
    </>
  );
};

export default Selects;
