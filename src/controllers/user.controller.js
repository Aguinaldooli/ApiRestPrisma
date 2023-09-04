// controller vai ter todas as funções
// controller vai tratar e dar as repostas da API

import bcrypt from "bcrypt";
import { userValidation } from "../validations/user.validation";
// Importa a função "createUser" do módulo "user.repository".
import { createUser, getAll } from "../repositorys/user.repository";

// Define uma função assíncrona chamada "create" que aceita os objetos "req" (requisição) e "res" (resposta) como parâmetros.
export const create = async (req, res) => {
  try {
    await userValidation.validate(req.body);

    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    // Chama a função "createUser" e passa o corpo da requisição (req.body) como parâmetro.
    const user = await createUser(req.body);
    // Responde com um status HTTP 200 (OK) e envia o usuário criado como resposta.
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
};
