import { useState } from "react";
import { destinations } from "../data/websiteData";
import { MapPin, X, CheckCircle, Ticket } from "lucide-react";

function Destinations() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "Tokyo International University",
    seats: 1,
  });

  function openBooking(place) {
    setSelectedPlace(place);
    setBookingSuccess(false);
    setForm({
      name: "",
      email: "",
      university: "Tokyo International University",
      seats: 1,
    });
  }

  function closeBooking() {
    setSelectedPlace(null);
    setBookingSuccess(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBookingSuccess(true);
  }

  return (
    <section id="destinations" className="section">
      <div className="section-heading">
        <p>Destinations</p>
        <h2>Popular places to explore</h2>
        <span>
          Students can discover culture, nature, food, and friendship across
          Japan.
        </span>
      </div>

      <div className="card-grid four">
        {destinations.map((place) => (
          <div className="destination-card" key={place.city}>
            <img src={place.image} alt={place.city} />

            <div>
              <h3>
                <MapPin size={18} />
                {place.city}
              </h3>

              <p>Next trip: {place.nextTrip}</p>
              <span>{place.price}</span>

              <button
                className="destination-book-button"
                onClick={() => openBooking(place)}
              >
                Book {place.city} Trip
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPlace && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <button className="modal-close" onClick={closeBooking}>
              <X size={22} />
            </button>

            {!bookingSuccess ? (
              <>
                <div className="modal-trip-preview">
                  <img src={selectedPlace.image} alt={selectedPlace.city} />

                  <div>
                    <p className="eyebrow">Book Destination Trip</p>
                    <h2>{selectedPlace.city} Trip</h2>
                    <span>
                      Next trip: {selectedPlace.nextTrip} •{" "}
                      {selectedPlace.price}
                    </span>
                  </div>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                  <label>
                    Full Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="student@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    University
                    <select
                      name="university"
                      value={form.university}
                      onChange={handleChange}
                    >
                      <option>Tokyo International University</option>
                      <option>Takasaki University</option>
                      <option>Tokyo University</option>
                      <option>Waseda University</option>
                      <option>Kyoto University</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    Number of Seats
                    <select
                      name="seats"
                      value={form.seats}
                      onChange={handleChange}
                    >
                      <option value="1">1 seat</option>
                      <option value="2">2 seats</option>
                      <option value="3">3 seats</option>
                    </select>
                  </label>

                  <div className="booking-summary">
                    <div>
                      <span>Destination</span>
                      <strong>{selectedPlace.city}</strong>
                    </div>

                    <div>
                      <span>Seats</span>
                      <strong>{form.seats}</strong>
                    </div>

                    <div>
                      <span>Status</span>
                      <strong>Reserved for demo</strong>
                    </div>
                  </div>

                  <button type="submit" className="confirm-booking-button">
                    Confirm Booking
                  </button>
                </form>
              </>
            ) : (
              <div className="success-box">
                <CheckCircle size={66} />

                <h2>Booking Confirmed!</h2>

                <p>
                  Thank you, {form.name}. Your seat for{" "}
                  <strong>{selectedPlace.city} Trip</strong> has been reserved.
                </p>

                <div className="ticket-box">
                  <Ticket size={30} />
                  <div>
                    <span>TABI Demo Ticket</span>
                    <strong>Next trip: {selectedPlace.nextTrip}</strong>
                  </div>
                </div>

                <button onClick={closeBooking}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Destinations;
