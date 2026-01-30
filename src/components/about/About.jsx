import './about.css'

export default function About() {
  return (
    <section className="section about">
      <div className="about-container">
        <div className="about-text">
          <h2>ABOUT DT HOUSE SERVICES (DTHS)</h2>
          <p>
           At DT House Services, we are redefining the standards of laundry, cleaning,
           and home maintenance across Lagos, Ibadan and its vibrant neighborood. 
          </p>
          <p>
            Our dedicated team goes beyond routine service delivery. We revitalize your
            wardrobe with expert laundry and dry-cleaning care, and we transform living,
            working, and industrial spaces into spotless, refreshed environments. Every 
            solution we provide is tailored, ensuring your specific needs are not only
            met but exceeded.
          </p>
          <p>
            Driven by a commitment to excellence, sustainability, and professionalism,
            we don’t just clean — we create healthier, brighter, and more welcoming
            spaces for you to thrive in. With DT House Services, you can always count
            on immaculate results, renewed comfort, and peace of mind.
          </p>

          <ul className="about-points">
            <li>✔ Fast pickup & delivery</li>
            <li>✔ Affordable & transparent pricing</li>
            <li>✔ Hygienic washing process</li>
            <li>✔ Customer-focused service</li>
          </ul>
        </div>

        {/* <div className="about-card">
          <h3>Why Customers Trust Us</h3>
          <p>
            Our mission is simple: to save you time while delivering spotless,
            fresh clothes every time.
          </p>
        </div> */}
      </div>
    </section>
  );
}
