import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="header-nav">
          <Link to="/chevaux" className="nav-link">
            Nos chevaux
          </Link>
          <Link to="/naissances" className="nav-link">
            Nos naissances
          </Link>
          <Link to="/" className="nav-link">
            <img src="/assets/Logo-linlouet.jpg" className="logo" alt="Logo de l'Élevage de Linlouet" />
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <div className="languages">
            <Link to="/fr" className="lang-link">
              FR
            </Link>
            <span>|</span>
            <Link to="/en" className="lang-link">
              EN
            </Link>
            <span>|</span>
            <Link to="/de" className="lang-link">
              DE
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
