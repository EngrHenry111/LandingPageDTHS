import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import './footer.css'
import ParticlesBackground from "../ParticleBackground/ParticlesBackground";


export default function Footer() {
   const openLink = (url) => {
    window.open(url, "_blank");
   }
  return (
    <>
    <ParticlesBackground/>
    <div className="main">
      
    <footer className="footer">
      <p>📍 Queens Hall University of Ibadan, Ibadan, Oyo State.</p>
      <p>📍27 Water Junction, Agbowo, UI, Ibadan, Oyo State.</p>
      <p>📞 +234 803 793 9240, +234 814 060 0516</p>
      <p>© {new Date().getFullYear()} DT HOUSE SERVICES (DTHS)</p>
    </footer>


       <div className="social-container">
      <button
        className="social-btn instagram"
        onClick={() => openLink("https://www.instagram.com/dthouseservices")}
      >
        <FaInstagram />
        <span>Instagram</span>
      </button>

      <button
        className="social-btn facebook"
        onClick={() => openLink("https://www.facebook.com/share/1Dhi1vTyYc/")}
      >
        <FaFacebookF />
        <span>Facebook</span>
      </button>

      <button
        className="social-btn tiktok"
        onClick={() => openLink("https://www.tiktok.com/@dt_house_services")}
      >
        <FaTiktok />
        <span>TikTok</span>
      </button>
    </div>
    </div>
    </>

  );
}
