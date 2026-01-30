import Header from "./components/header/Header";
import Services from "./components/services/Services";
import BookingForm from "./components/bookingForm/BookingForm";
import Footer from "./components/footer/Footer";
import "./App.css";
import About from "./components/about/About";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonial";
import FloatingWhatsApp from "./components/floatingWhatsapp/FloatingWhatsApp";
import ParticlesBackground from "./components/ParticlesBackground";
import Gallery from "./components/gallary/Gallery";



function App() {
  return (
    <>
    
      <Header />

      {/* HERO */}
      <section className="hero">
  <ParticlesBackground/>

  <div className="hero-content">
    <h1>Professional Laundry & Cleaning Services</h1>
    <p>
      Clean, fresh, and neatly finished clothes with fast pickup & delivery.
    </p><p>
      <span style={{ fontSize: "22px", color: "#f58529"}} >Motto: </span> We offer you ease comfort and luxury.
    </p>
    <a href="#booking" className="btn-primary">
      Book Pickup
    </a>
  </div>
</section>


      <About/>

      <Services />
      <Gallery/>

      {/* <Pricing/> */}
      {/* <Testimonials/> */}


      {/* BOOKING */}
      <section id="booking" className="section">
      <BookingForm />
      </section>
      <FloatingWhatsApp/>

      {/* MAP */}
      <section className="section">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps?q=Oyo,Nigeria&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}

export default App;
