import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Inicio } from "./pages/inicio/Inicio";
import { Certification } from "./pages/certification/certification";



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
        path: "/certification",
        element: (
          <Layout>
            <Certification />
          </Layout>
        ),
      },
    ],
  },
]);
export default rotas;
