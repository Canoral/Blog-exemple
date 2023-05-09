import "./Header.scss";

export interface ICategory {
  route: string;
  label: string;
}

interface HeaderProps {
  categories: ICategory[];
  zenMode: boolean;
  setZenMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  const listItems = categories.map((category) => (
    // <a key={category.label} className="menu-link menu-link--selected" href="#header">
    <a key={category.label} className="menu-link" href={category.route}>
      {category.label}
    </a>
  ));

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        {listItems}

        <button
          className="menu-btn"
          type="button"
          onClick={() => setZenMode(!zenMode)}
        >
          {zenMode ? "Désactiver" : "Activer"} le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
