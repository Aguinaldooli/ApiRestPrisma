//importar o arquivo prisma que foi instaciado em services
import { prisma } from "../services/prisma";

// Define uma função assíncrona chamada "createUser" que aceita um parâmetro "data".
export const createUser = async (data) => {
  // Utiliza o objeto "prisma" para criar um novo usuário no banco de dados.
  // A função "user.create" é uma função gerada automaticamente pelo Prisma com base no seu modelo de dados.
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  // Retorna o usuário criado.
  return user;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({});
  return users;
};
