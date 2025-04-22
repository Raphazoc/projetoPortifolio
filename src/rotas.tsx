import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Inicio } from "./pages/inicio/Inicio";



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
    ],
  },
]);
export default rotas;
