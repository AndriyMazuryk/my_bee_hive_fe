import { Link } from "react-router-dom";

import UserBlock from "./UserBlock";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <UserBlock />
    </header>
  );
};

export default Header;
