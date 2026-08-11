import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <div className="hero-image">
          <img className="hero-img" src="/public/assets/images/Boheme-1.jpg" alt="Élevage de Linlouet" />
        </div>
        <div className="hero-text">
          <h1>Bienvenue à Linlouët</h1>
          <h2>Elever des Pur-Sangs Lusitaniens en Bretagne, entre terre, mer et traditions vivantes.</h2>
          <div className="hero-button">
            <a href="/venir-a-linlouet" className="hero-button-link">
              Préparer une visite
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
