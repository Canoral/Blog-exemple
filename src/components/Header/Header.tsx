import "./Header.scss";
import { HeaderProps } from "../../@interfaces/interfaces";

function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  const categoriesList = categories.map((category) => {
    return (
      <a
        key={category.label}
        className="menu-link menu-link--selected"
        href={category.route}
      >
        {category.label}
      </a>
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
