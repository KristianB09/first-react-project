import "./navbar.css";
import logo from "../assets/logo.svg";
import SetsButton from "../buttons/navbarButtons/setsButton.jsx";
import SearchBar from "../search-bar/searchBar.jsx";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="header-container">
        <div className="logo-header">
          <img src={logo} alt="logo" />
          <h1 className="mtg-card-viewer-header">MTG card viewer</h1>
        </div>
        <SearchBar />
        <SetsButton />
      </div>
    </nav>
  );
}

export default Navbar;
