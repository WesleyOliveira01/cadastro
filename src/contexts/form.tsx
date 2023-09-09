import { Dispatch, FormEvent, SetStateAction, createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Iusuario } from "@/interfaces/usuarios";

interface Iformulario {
  children: React.ReactNode;
}
export interface IformularioContext extends Iusuario {
  setNome: Dispatch<SetStateAction<string >>;
  setEmail: Dispatch<SetStateAction<string>>;
  setRg: Dispatch<SetStateAction<number | null>>;
  setCpf: Dispatch<SetStateAction<number | null>>;
  setEndereco: Dispatch<SetStateAction<string>>;
  setPlano: Dispatch<SetStateAction<string>>;
  setTaxa: Dispatch<SetStateAction<string>>;
  setTelefone: Dispatch<SetStateAction<number | null>>;
  setComoConheceu: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const FormularioContext = createContext<IformularioContext| undefined>(undefined);;
FormularioContext.displayName = "formulario";

export const FormularioProvider = ({ children }: Iformulario) => {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [plano, setPlano] = useState<string>("");
  const [taxa, setTaxa] = useState<string>("");
  const [comoConheceu, setComoConheceu] = useState<string>("");

  const [telefone, setTelefone] = useState<number | null>(null);
  const [cpf, setCpf] = useState<number | null>(null);
  const [rg, setRg] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usuario: Iusuario = {
      nome: nome,
      cpf: cpf as number,
      rg: rg as number,
      //@ts-ignore
      telefone: telefone as number,
      email: email,
      endereco: endereco,
      plano: plano,
      taxa: taxa,
      como_conheceu: comoConheceu,
    };
    fetch("/api/supabase", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "content-type": "application/json",
      },
    });
    router.push("cadastroConcluido");
    console.log(usuario);
  };

  return (
    <FormularioContext.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        rg,
        setRg,
        cpf,
        setCpf,
        endereco,
        setEndereco,
        plano,
        setPlano,
        taxa,
        setTaxa,
        //@ts-ignore
        comoConheceu,
        telefone,
        setTelefone,
        setComoConheceu,
        handleSubmit,
      }}
    >
      {children}
    </FormularioContext.Provider>
  );
};

const useFormulario = () => {
  const context = useContext(FormularioContext);
  return context;
};

export default useFormulario;
