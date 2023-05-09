import "./Header.scss";
import { Link } from "react-router-dom";

import { HeaderProps } from "../../@interfaces/interfaces";

function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  const categoriesList = categories.map((category) => {
    return (
      <Link
        key={category.label}
        className="menu-link menu-link"
        to={category.route}
      >
        {category.label}
      </Link>
    );
  });

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        {categoriesList}
        <button
          className="menu-btn"
          type="button"
          onClick={() => {
            setZenMode(!zenMode);
          }}
        >
          {zenMode ? "Désactiver le mode zen" : "Activer le mode zen"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
