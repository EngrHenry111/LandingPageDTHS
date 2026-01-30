import './bookingForm.css'

import { useState } from "react";

export default function BookingForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Laundry Booking Request:
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Address: ${data.address}
    `;

    window.open(
      `https://wa.me/2348140600516?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="bookmain">
    <div className="booking-box">
      <h2>Book a Laundry Pickup</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" required onChange={handleChange} />

        <select name="service" required onChange={handleChange}>
          <option value="">Select Service</option>
          <option>Laundry & Folding</option>
          <option>Post-Construction Cleaning</option>
          <option>Starching & Stain Removal</option>
          <option>Upholstery & Chair Cleaning</option>
          <option>Tiles Cleaning & Polishing</option>
          <option>Deep Cleaning</option>
          <option>Event Cleaning (Before & After)</option>
          <option>Fumigation & Pest Control</option>
          
        </select>

        <textarea
          name="address"
          placeholder="Pickup Address"
          required
          onChange={handleChange}
        />

        <button className="btn-primary">Send via WhatsApp</button>
      </form>
    </div>
    </div>
  );
}
