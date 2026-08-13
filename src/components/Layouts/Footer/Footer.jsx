import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <Link to="/" className="footer-link">
            <img className="footer-logo" src="/assets/Logo-linlouet.jpg" alt="Logo de l'Élevage de Linlouet" />
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/" className="footer-link">
            Accueil
          </Link>
          <Link to="/chevaux" className="footer-link">
            Nos chevaux
          </Link>
          <Link to="/galerie" className="footer-link">
            Galerie
          </Link>
          <Link to="/contact" className="footer-link">
            Venir à Linlouët
          </Link>
          <p className="footer-contact">
            Contactez-nous : <a href="mailto:contact@elevagelinlouet.fr">contact@elevagelinlouet.fr</a>
          </p>
        </div>
        <div className="legal-links">
          <Link to="/mentionslegales" className="footer-link">
            Mentions légales
          </Link>
          <Link to="/politiqueconfidentialite" className="footer-link">
            Politique de confidentialité
          </Link>
          <Link to="/cookies" className="footer-link">
            Cookies
          </Link>
        </div>
      </div>
      <div className="footer-mentions">
        <p>&copy; 2023 Elevage Linlouët. Tous droits réservés. Site réalisé par Artemis Lab</p>
      </div>
    </footer>
  );
}

export default Footer;
