// Importa a classe PrismaClient do pacote "@prisma/client"
import { PrismaClient } from "@prisma/client";

//Cria uma instância do cliente Prisma e a exporta como "prisma".
export const prisma = new PrismaClient();

//A instância prisma pode ser usada para interagir com o banco de dados usando o Prisma
