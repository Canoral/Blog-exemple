// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// On importe notre composant principal
import App from "./components/App/App";
import NotFound from "./components/NotFound/NotFound";
// On importe notre fichier de style global
import "./styles/index.scss";

// je crée un Router
const router = createBrowserRouter([
  {
    path: "/", // quand l'URL correspond à `/`…
    // element: <h1>HW!</h1>, // …j'affiche l'élément `<h1>HW!</h1>`
    element: <App />, // à la racine, on affiche la _Route root_
    errorElement: <NotFound />,
  },
]);

// Je crée un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// On injecte notre application dans le DOM
// On diffuse les outils et les routes configurées (ci-dessus)
// de React Router dans l'application
root.render(<RouterProvider router={router} />);
