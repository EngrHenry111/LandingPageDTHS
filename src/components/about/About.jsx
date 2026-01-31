import { useState } from "react";
import "./about.css";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section about">
      <div className="about-container">
        <div className="about-text">
          <h2>ABOUT DT HOUSE SERVICES (DTHS)</h2>

          {/* TEXT WRAPPER */}
          <div className={`about-paragraphs ${expanded ? "expanded" : ""}`}>
            <p>
              At DT House Services, we are redefining the standards of laundry,
              cleaning, and home maintenance across Lagos, Ibadan and its vibrant
              neighborhood.
            </p>

            <p>
              Our dedicated team goes beyond routine service delivery. We
              revitalize your wardrobe with expert laundry and dry-cleaning care,
              and we transform living, working, and industrial spaces into
              spotless, refreshed environments. Every solution we provide is
              tailored, ensuring your specific needs are not only met but
              exceeded.
            </p>

            <p>
              Driven by a commitment to excellence, sustainability, and
              professionalism, we don’t just clean — we create healthier,
              brighter, and more welcoming spaces for you to thrive in. With DT
              House Services, you can always count on immaculate results,
              renewed comfort, and peace of mind.
            </p>
            <p> <span style={{color:"lightcoral", fontSize:"20px"}}>Laundry & Cleaning Services</span>
              :{" "} Experience convenience and quality and premium laundry and dry cleaning services
              that keeps your clothes fresh, crisp, and ready to wear-saving you time and effort.
            </p>
            <p><span style={{color:"lightcoral", fontSize:"20px"}}>Fumigation & Pest control Services:</span>
            {" "}we provides professional fumigation and pest control solutions designed to 
            removeinfestations and prevent future risks, ensuring a safe and Hygienic
            environment.
            </p>
            <p><span style={{color:"lightcoral", fontSize:"20px"}}>Professional Cleaning Services</span> 
            {" "}Choose DT House Services for a cleaner, healthier space-every time.
            Our professional cleaning team delivers exceptional results, flexible scheduling, and
            unmatched reliability to keep your home or business looking its best.
            </p>
          </div>

          {/* READ MORE BUTTON */}
          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>

          <ul className="about-points">
            <li>✔ Fast pickup & delivery</li>
            <li>✔ Affordable & transparent pricing</li>
            <li>✔ Hygienic washing process</li>
            <li>✔ Customer-focused service</li>
          </ul>
        </div>
      </div>
    </section>
  );
}




// import './about.css'

// export default function About() {
//   return (
//     <section className="section about">
//       <div className="about-container">
//         <div className="about-text">
//           <h2>ABOUT DT HOUSE SERVICES (DTHS)</h2>
//           <p>
//            At DT House Services, we are redefining the standards of laundry, cleaning,
//            and home maintenance across Lagos, Ibadan and its vibrant neighborood. 
//           </p>
//           <p>
//             Our dedicated team goes beyond routine service delivery. We revitalize your
//             wardrobe with expert laundry and dry-cleaning care, and we transform living,
//             working, and industrial spaces into spotless, refreshed environments. Every 
//             solution we provide is tailored, ensuring your specific needs are not only
//             met but exceeded.
//           </p>
//           <p>
//             Driven by a commitment to excellence, sustainability, and professionalism,
//             we don’t just clean — we create healthier, brighter, and more welcoming
//             spaces for you to thrive in. With DT House Services, you can always count
//             on immaculate results, renewed comfort, and peace of mind.
//           </p>

//           <ul className="about-points">
//             <li>✔ Fast pickup & delivery</li>
//             <li>✔ Affordable & transparent pricing</li>
//             <li>✔ Hygienic washing process</li>
//             <li>✔ Customer-focused service</li>
//           </ul>
//         </div>

        
//       </div>
//     </section>
//   );
// }
