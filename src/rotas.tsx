import { createBrowserRouter } from "react-router-dom";
import { Inicio } from "./components/pages/inicio/Inicio";
import { Layout } from "./components/Layout/Layout";

const rotas = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <Inicio />
          </Layout>
        ),
      },
      {
        path: "/projetos",
        element: (
          <Layout>
            <Inicio />
          </Layout>
        ),
      },
    ],
  },
]);
export default rotas;
