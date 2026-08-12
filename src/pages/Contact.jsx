import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Header />
      <section className="contact-page-section">
        <div className="hero-contact-content">
          <div className="hero-contact"></div>
          <div className="contact-img-container">
            <img className="contact-img" src="/public/assets/images/contact/phare.jpg" alt="Phare du Finistère" />
            <div className="contact-title-overlay">
              <h2>Venir à Linlouët</h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
