import './service.css'


import { useRef } from "react";
// import "./Services.css";

const services = [
  {
    title: "Laundry & Folding",
    desc: "Wash, dry, fold, and organize clothes.",
  },
  {
    title: "Post-Construction Cleaning",
    desc: "Dust, debris & final touches.",
  },
  {
    title: "Starching & Stain Removal",
    desc: "Crisp finish & tough stain treatment.",
   },
  
  {
    title: "Upholstery & Chair Cleaning",
    desc: "Sofas, chairs & fabric care.",
  },
  {
    title: "Tiles Cleaning & Polishing",
    desc: "Sparkling, streak-free surfaces.",
  },
  {
    title: "Deep Cleaning",
    desc: "Thorough sanitization for any space.",
  },
  {
    title: "Event Cleaning (Before & After)",
    desc: "Hassle-free preparation & cleanup.",
  },
  {
    title: "Fumigation & Pest Control",
    desc: "Safe, effective pest management.",
  },
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <div className="services-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          &#10094;
        </button>

        <div className="services-container" ref={scrollRef}>
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>
    </section>
  );
}




// export default function Services() {
//   return (
//     <section className="section">
//       <h2>Our Services</h2>

//       <div className="services-grid">
//         <div className="card">🧼 
//           Wash & Fold
          // At  DT House Services (DTHS), we go beyond ordinary washing to deliver premium garment care that protects your fabrics, preserves color, and extends the life of every item.
          // Whether you need professional laundry services, eco-friendly dry cleaning, or same-day pickup and delivery, our expert team ensures your clothes, bedding, and curtains look immaculate and feel fresh.

//         </div>
//         <div className="card">👔 Wash & Iron</div>
//         <div className="card">🧥 Dry Cleaning</div>
//         <div className="card">🛏️ Beddings & Curtains</div>
//         <div className="card">🚚 Pickup & Delivery</div>
//       </div>
//     </section>
//   );
// }
