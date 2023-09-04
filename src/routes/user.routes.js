// Importa a função "create" do módulo "user.controller".
import { create, get } from "../controllers/user.controller";

// Define uma função chamada "userRoutes" que aceita um objeto "app" como parâmetro.
const userRoutes = (app) => {
  // Configura uma rota POST ("/user") que chama a função "create" quando uma solicitação POST é feita para essa rota.
  app.post("/user", create);
  app.get("/user", get);
};

// Exporta a função "userRoutes" para ser utilizada em outras partes do aplicativo.
export default userRoutes;
