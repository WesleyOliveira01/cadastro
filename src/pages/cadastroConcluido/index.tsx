import React from "react";
import { Metadata } from "next";
import { FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Cadastro concluido",
};

const CadastroConcluido = () => {
  return (
    <main className="flex items-center justify-center h-[85vh]">
      <section className="lg:w-[50%] w-[90%]  p-4  flex gap-2 justify-center items-center">
        <h1 className="text-2xl font-semibold text-green-600">Seu cadastro foi realizado </h1>
        <FaCheckCircle size={30} color="green"/>
      </section>
    </main>
  );
};

export default CadastroConcluido;
