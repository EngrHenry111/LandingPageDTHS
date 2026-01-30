import { useEffect, useState } from "react";
import logo from "../../assets/Temple.jpg";
import './header.css'
export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Laundry Logo" />
        <span>DT HOUSE SERVICES (DTHS) </span>
      </div>

      <div className="header-actions">
        <button onClick={() => setDark(!dark)} className="dark-toggle">
          {dark ? "☀️" : "🌙"}
        </button>

        <a href="https://wa.me/2348140600516" className="watsapp">
          WhatsApp
        </a>
      </div>
    </header>
  );
}






// import logo from "../assets/Temple.jpg";

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="brand">
//         <img src={logo} alt="Laundry Logo" />
//         <span>SparkleFresh Laundry</span>
//       </div>

//       <a
//         href="https://wa.me/2348012345678"
//         target="_blank"
//         className="btn-primary"
//       >
//         WhatsApp Us
//       </a>
//     </header>
//   );
// }
