// Importa o módulo Express, que é um framework para construir aplicativos web.
import express from "express";
// Importa o módulo Cors, que lida com políticas de segurança de acesso a recursos da web.
import cors from "cors";
// Importa o módulo Dotenv, que permite carregar variáveis de ambiente a partir de um arquivo .env.
import dotenv from "dotenv";
import routes from "./routes";

// Carrega variáveis de ambiente a partir de um arquivo .env, se existir.
dotenv.config();

// Cria uma instância do aplicativo Express.
const app = express();

// Adiciona o middleware Cors para lidar com políticas de segurança de acesso a recursos da web.
app.use(cors());
app.use(express.json());

routes(app);

app.listen(3001);
console.log("Servidor iniciou");
