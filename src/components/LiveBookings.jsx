import { useEffect, useState } from "react";
import { liveTrips } from "../data/websiteData";
import { X, CheckCircle, Ticket } from "lucide-react";

const names = [
  "Maria from Spain",
  "Akash from Nepal",
  "Ahmed from Egypt",
  "Sarah from Canada",
  "Linh from Vietnam",
  "Daniel from Germany",
  "Yuki from Japan",
  "Priya from India",
  "Lucas from Brazil",
  "Emma from France",
  "Minji from Korea",
  "Carlos from Mexico",
];

const actions = [
  "joined",
  "booked",
  "saved",
  "reserved a seat for",
  "invited a friend to",
];

const tripNames = [
  "Kyoto Cultural Weekend",
  "Mt. Fuji Adventure",
  "Osaka Food & Friendship Tour",
  "Nara Day Trip",
  "Tokyo Weekend Walk",
  "Hakone Onsen Escape",
];

function getRandomActivity() {
  const name = names[Math.floor(Math.random() * names.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const trip = tripNames[Math.floor(Math.random() * tripNames.length)];

  return {
    text: `${name} ${action} ${trip}`,
    time: "Just now",
  };
}

function LiveBookings() {
  const [activities, setActivities] = useState([
    {
      text: "Maria from Spain joined Kyoto Cultural Weekend",
      time: "2 min ago",
    },
    {
      text: "Akash from Nepal booked Mt. Fuji Adventure",
      time: "5 min ago",
    },
    {
      text: "Ahmed from Egypt joined Osaka Food Tour",
      time: "8 min ago",
    },
    {
      text: "Sarah from Canada joined Nara Day Trip",
      time: "12 min ago",
    },
    {
      text: "Linh from Vietnam saved Kyoto Cultural Weekend",
      time: "15 min ago",
    },
  ]);

  const [trips, setTrips] = useState(liveTrips);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    university: "Tokyo International University",
    seats: 1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = getRandomActivity();

      setActivities((previousActivities) => [
        newActivity,
        ...previousActivities.slice(0, 4),
      ]);

      setTrips((previousTrips) =>
        previousTrips.map((trip) => {
          const shouldUpdate = Math.random() > 0.75;

          if (shouldUpdate && trip.booked < trip.total) {
            return {
              ...trip,
              booked: trip.booked + 1,
            };
          }

          return trip;
        })
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  function openBooking(trip) {
    setSelectedTrip(trip);
    setBookingSuccess(false);
    setBookingForm({
      name: "",
      email: "",
      university: "Tokyo International University",
      seats: 1,
    });
  }

  function closeBooking() {
    setSelectedTrip(null);
    setBookingSuccess(false);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setBookingForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleBookingSubmit(event) {
    event.preventDefault();

    const seatsToBook = Number(bookingForm.seats);

    setTrips((previousTrips) =>
      previousTrips.map((trip) => {
        if (trip.title === selectedTrip.title) {
          const updatedBooked = Math.min(trip.booked + seatsToBook, trip.total);

          return {
            ...trip,
            booked: updatedBooked,
          };
        }

        return trip;
      })
    );

    setActivities((previousActivities) => [
      {
        text: `${bookingForm.name || "A student"} booked ${selectedTrip.title}`,
        time: "Just now",
      },
      ...previousActivities.slice(0, 4),
    ]);

    setBookingSuccess(true);
  }

  return (
    <section id="bookings" className="section">
      <div className="section-heading">
        <p>Live Bookings</p>
        <h2>Trips filling fast</h2>
        <span>
          See current trip availability, booking progress, and live student
          activity.
        </span>
      </div>

      <div className="booking-layout">
        <div className="trip-booking-grid">
          {trips.map((trip) => {
            const progress = Math.round((trip.booked / trip.total) * 100);
            const spotsLeft = trip.total - trip.booked;

            return (
              <div className="booking-card" key={trip.title}>
                <img src={trip.image} alt={trip.title} />

                <div className="booking-content">
                  <div className="booking-top">
                    <h3>{trip.title}</h3>
                    <span>{trip.price}</span>
                  </div>

                  <p>{trip.date}</p>

                  <div className="progress-info">
                    <span>
                      {trip.booked}/{trip.total} booked
                    </span>
                    <span>{progress}% full</span>
                  </div>

                  <div className="progress-bar">
                    <div style={{ width: `${progress}%` }}></div>
                  </div>

                  <button
                    onClick={() => openBooking(trip)}
                    disabled={spotsLeft <= 0}
                    className={spotsLeft <= 0 ? "disabled-button" : ""}
                  >
                    {spotsLeft <= 0
                      ? "Fully Booked"
                      : spotsLeft <= 5
                      ? `Book Now • ${spotsLeft} spots left`
                      : "Book Now"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="activity-feed">
          <h3>
            <span></span>
            Live Activity
          </h3>

          {activities.map((item, index) => (
            <div
              className={`activity-item ${index === 0 ? "new-activity" : ""}`}
              key={`${item.text}-${index}`}
            >
              <p>{item.text}</p>
              <small>{item.time}</small>
            </div>
          ))}
        </aside>
      </div>

      {selectedTrip && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <button className="modal-close" onClick={closeBooking}>
              <X size={22} />
            </button>

            {!bookingSuccess ? (
              <>
                <div className="modal-trip-preview">
                  <img src={selectedTrip.image} alt={selectedTrip.title} />

                  <div>
                    <p className="eyebrow">Book Your Trip</p>
                    <h2>{selectedTrip.title}</h2>
                    <span>
                      {selectedTrip.date} • {selectedTrip.price}
                    </span>
                  </div>
                </div>

                <form className="booking-form" onSubmit={handleBookingSubmit}>
                  <label>
                    Full Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="student@example.com"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </label>

                  <label>
                    University
                    <select
                      name="university"
                      value={bookingForm.university}
                      onChange={handleInputChange}
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
                      value={bookingForm.seats}
                      onChange={handleInputChange}
                    >
                      <option value="1">1 seat</option>
                      <option value="2">2 seats</option>
                      <option value="3">3 seats</option>
                    </select>
                  </label>

                  <div className="booking-summary">
                    <div>
                      <span>Trip</span>
                      <strong>{selectedTrip.title}</strong>
                    </div>

                    <div>
                      <span>Seats</span>
                      <strong>{bookingForm.seats}</strong>
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
                  Thank you, {bookingForm.name}. Your seat for{" "}
                  <strong>{selectedTrip.title}</strong> has been reserved.
                </p>

                <div className="ticket-box">
                  <Ticket size={30} />
                  <div>
                    <span>TABI Demo Ticket</span>
                    <strong>{selectedTrip.date}</strong>
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

export default LiveBookings;
