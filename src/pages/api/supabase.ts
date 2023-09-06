import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

const public_url = process.env.SUPABASE_PUBLIC_URL as string;
const public_key = process.env.SUPABASE_PUBLIC_KEY as string;

const db = createClient(public_url, public_key);

const dataAtual = new Date();

const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = dataAtual.getFullYear();
const dataCadastro = `${dia}/${mes}/${ano}`;
const mesCadastro = `${mes}/${ano}`

type Data = {
  message: string;
};

const httpStatus = {
  Sucess: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

const controlerMethod = {
  async GET(req: NextApiRequest, res: NextApiResponse) {
    res.status(httpStatus.Sucess).json({ message: "GET request sucess" });
  },

  async POST(req: NextApiRequest, res: NextApiResponse) {
    const { nome, cpf, rg, email, telefone, endereco, plano, taxa,como_conheceu} = req.body;

    const { data, error } = await db.from("usuarios").insert({
      created: dataCadastro,
      nome: nome,
      cpf: cpf,
      rg: rg,
      email: email,
      telefone: telefone,
      endereco: endereco,
      plano: plano,
      taxa: taxa,
      como_conheceu:como_conheceu,
      mesCadastro:mesCadastro
    });
    if (error) {
      console.error(error);
      res
        .status(httpStatus.BadRequest)
        .json({ message: "ops algo deu errado" });
    }
    res
      .status(httpStatus.Sucess)
      .json({ message: "POST request sucess", data: req.body });
  },
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //@ts-ignore
  const controler = controlerMethod[req.method];
  if (!controler) {
    res.status(httpStatus.NotFound).json({ message: "nada encontrado aqui" });
  }

  controler(req, res);
}
