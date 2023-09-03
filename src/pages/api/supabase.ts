import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

const supabaseUrl: string = process.env.SUPABASE_PUBLIC_URL as string;
const key: string = process.env.SUPABASE_PUBLIC_KEY as string;

const db = createClient(supabaseUrl, key);

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
    const { nome, cpf, rg, email, telefone, endereco, plano } = req.body;

    const { data, error } = await db
      .from("usuarios")
      .insert({
        nome: nome,
        cpf: cpf,
        rg: rg,
        email: email,
        telefone: telefone,
        endereco: endereco,
        plano: plano,
      });
    if(error){
      console.error(error);
      res.status(httpStatus.BadRequest).json({message:"ops algo deu errado"})
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
