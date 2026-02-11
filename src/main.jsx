import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";

/**
 * Configuração das Rotas da Aplicação.
 * Define quais componentes serão renderizados para cada URL.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Página principal
  },
  {
    path: "/task",
    element: <TaskPage />, // Página de detalhes da tarefa
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* O RouterProvider gerencia a navegação baseada na configuração acima */}
    <RouterProvider router={router} />
  </StrictMode>,
);
