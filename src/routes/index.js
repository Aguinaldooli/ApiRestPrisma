//Todas as rotas
//este código serve como um ponto de entrada para a configuração de todas as rotas do aplicativo
import userRoutes from "./user.routes";

const routes = (app) => {
  userRoutes(app);
};

export default routes;
