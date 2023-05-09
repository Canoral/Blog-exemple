// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// On importe notre composant principal
import App from "./components/App/App";
// On importe notre fichier de style global
import "./styles/index.scss";

// je crée un Router
const router = createBrowserRouter([
  {
    path: "/", // quand l'URL correspond à `/`…
    element: <h1>HW!</h1>, // …j'affiche l'élément `<h1>HW!</h1>`
  },
]);

// Je crée un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// On injecte notre application dans le DOM
// On diffuse les outils et les routes configurée (ci-dessous) de React Router dans l'application
root.render(<RouterProvider router={router} />);
