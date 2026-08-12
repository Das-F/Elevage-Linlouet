import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <section className="hero-section">
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
      </section>

      <section className="about-section">
        <div className="about-title">
          <h2>L'esprit de Linlouët</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img className="about-img" src="/public/assets/images/linlouet-portrait.jpg" alt="Portrait des éleveurs de Linlouet" />
          </div>
          <div className="about-text">
            <p className="about-text-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed pretium enim, et gravida turpis. Donec eleifend quam et tellus semper laoreet. Proin nec tempor lorem, non tempus nulla. Nunc accumsan nisi eget mi eleifend euismod. Vestibulum sed imperdiet dolor. Aliquam gravida, ante in sollicitudin semper, turpis ante interdum nisi, vitae euismod augue eros sed lacus. Ut pharetra efficitur dictum. Morbi auctor sem quis elit ullamcorper porta. In a aliquet orci. Integer eleifend ipsum lorem, tincidunt venenatis ante finibus sed. Maecenas accumsan tincidunt justo, non feugiat tortor ullamcorper et. Vivamus a vulputate sem. Cras a quam scelerisque, dapibus mi vel, aliquam est. Aenean semper rutrum felis. Vestibulum cursus tortor malesuada eros finibus, nec tincidunt purus
              maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque id lorem id nunc consequat imperdiet eget cursus elit. Nam id arcu rhoncus, bibendum nulla quis, egestas urna. Suspendisse bibendum metus nisl, in varius odio ultricies nec. Quisque id diam urna. Nunc laoreet tellus nunc, eu consectetur nunc egestas a. Suspendisse potenti. Sed id tincidunt urna. Integer purus nisi, ultricies at posuere et, dictum vitae ex.
            </p>
          </div>
        </div>
      </section>

      <section className="horses-section">
        <div className="horses-title">
          <h2>Nos chevaux</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed pretium enim, et gravida turpis.</p>
        </div>
        <div className="horses-cards">
          <div className="horse-card">
            <img className="horse-img" src="/public/assets/images/horses/Boheme.jpg" alt="Cheval 1" />
            <div className="horse-text">
              <h3>Nom du cheval 1</h3>
              <p>Description du cheval 1...</p>
              <div className="horses-button">Découvrir</div>
            </div>
          </div>
          <div className="horse-card">
            <img className="horse-img" src="/public/assets/images/horses/xaman.jpg" alt="Cheval 1" />
            <div className="horse-text">
              <h3>Nom du cheval 2</h3>
              <p>Description du cheval 2...</p>
              <div className="horses-button">Découvrir</div>
            </div>
          </div>
          <div className="horse-card">
            <img className="horse-img" src="/public/assets/images/horses/vermeer.jpg" alt="Cheval 1" />
            <div className="horses-text">
              <h3>Nom du cheval 3</h3>
              <p>Description du cheval 3...</p>
              <div className="horses-button">Découvrir</div>
            </div>
          </div>
        </div>
        <div className="horses-title">
          <h3>Notre philosophie de selection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec tempor lorem, non tempus nulla. Nunc accumsan nisi eget mi eleifend euismod. Vestibulum sed imperdiet dolor. Aliquam gravida, ante in sollicitudin semper, turpis ante interdum nisi, vitae euismod augue eros sed lacus. Ut pharetra efficitur dictum. Morbi auctor sem quis elit ullamcorper porta. In a aliquet orci. Integer eleifend ipsum lorem, tincidunt venenatis ante finibus sed. Maecenas accumsan tincidunt justo, non feugiat tortor ullamcorper et. Vivamus a vulputate sem. Cras a quam scelerisque, dapibus mi vel, aliquam est. Aenean semper rutrum felis. Vestibulum cursus tortor malesuada eros finibus, nec tincidunt purus maximus.</p>
        </div>
      </section>

      <section className="news-section">
        <div className="news-content">
          <h2>La Vie à Linlouët</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="news-cards">
            <div className="news-card">
              <img className="news-img" src="/public/assets/images/news/RS-1.png" alt="Cheval 1" />
              <div className="news-button">En voir plus</div>
            </div>
            <div className="news-card">
              <img className="news-img" src="/public/assets/images/news/RS-2.png" alt="Cheval 1" />
              <div className="news-button">En voir plus</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
