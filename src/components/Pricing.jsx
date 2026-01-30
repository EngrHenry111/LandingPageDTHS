export default function Pricing() {
  return (
    <section className="section pricing">
      <h2>Simple & Transparent Pricing</h2>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>Basic Wash</h3>
          <p className="price">₦500 / kg</p>
          <span>Wash & Fold</span>
        </div>

        <div className="price-card highlight">
          <h3>Standard</h3>
          <p className="price">₦800 / kg</p>
          <span>Wash & Iron</span>
        </div>

        <div className="price-card">
          <h3>Dry Cleaning</h3>
          <p className="price">From ₦1,500</p>
          <span>Special garments</span>
        </div>
      </div>
    </section>
  );
}
