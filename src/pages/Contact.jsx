import Header from "../components/Layouts/Header/Header";
import Footer from "../components/Layouts/Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <Header />
      <section className="contact-section">
        <div className="contact-title">
          <h2>Contactez-nous</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
