import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    img: "/ma6.jpg",
    title: "Modern Washing Machines",
  },
  {
    img: "/cl2.jpg",
    title: "Professional Staff on Duty",
  },
  {
    img: "/cl6.jpg",
    title: "Expert Teams",
  },
  {
    img: "/mas6.jpg",
    title: "Fast Pickup & Delivery",
  },
  {
    img: "/mas1.jpg",
    title: "Fast Pickup & Delivery",
  },
  {
    img: "/mas9.webp",
    title: "Neat Ironing Section",
  },
  {
    img: "/mas7.jpg",
    title: "Neat Ironing Section",
  },
  {
    img: "/cl3.jpg",
    title: "Expert Dry Cleaning",
  },
  
  {
    img: "/ma3.avif",
    title: "Expert Dry Cleaning Machine",
  },
  {
    img: "/cl5.jpg",
    title: "Expert Teams",
  },
];

export default function Gallery() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const cardWidth = 300;
      scrollRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      setActiveIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: index * 300,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="gallery-section">
      <h2>Our Facility & Team</h2>
      <p className="gallery-subtitle">
        A glimpse of our professional laundry environment & our cleaning team
      </p>

      <div className="gallery-wrapper">
        <div className="gallery-container" ref={scrollRef}>
          {galleryItems.map((item, index) => (
            <div className="gallery-card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="gallery-dots">
        {galleryItems.map((_, index) => (
          <span
            key={index}
            className={`gallery-dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}




// import "./Gallery.css";

// const galleryItems = [
//   {
//     img: "/assets/washing-machine.jpg",
//     title: "State-of-the-Art Washing Machines",
//   },
//   {
//     img: "/assets/staff.jpg",
//     title: "Friendly Staff on Duty",
//   },
//   {
//     img: "/assets/delivery-truck.jpg",
//     title: "Fast Pickup & Delivery",
//   },
//   {
//     img: "/assets/ironing.jpg",
//     title: "Professional Ironing",
//   },
//   {
//     img: "/assets/dry-cleaning.jpg",
//     title: "Expert Dry Cleaning",
//   },
// ];

// export default function Gallery() {
//   return (
//     <section className="gallery-section">
//       <h2>Our Facilities & Team</h2>
//       <p>Take a look behind the scenes at SparkleFresh Laundry</p>

//       <div className="gallery-grid">
//         {galleryItems.map((item, index) => (
//           <div className="gallery-card" key={index}>
//             <img src={item.img} alt={item.title} />
//             <div className="gallery-overlay">
//               <h3>{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
