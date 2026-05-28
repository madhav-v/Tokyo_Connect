import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { mockEvents } from "../data/event";
import { getLocalEvents, saveBooking } from "../utils/storage";

function Checkout() {
  const { id } = useParams();
  const events = getLocalEvents(mockEvents);
  const event = events.find((item) => item.id === id);

  const [participants, setParticipants] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    status: "International Student",
    paymentMethod: "Demo Card",
  });

  if (!event) {
    return (
      <div className="page-container py-20">
        <h1 className="text-3xl font-bold">Event not found</h1>
      </div>
    );
  }

  const total = event.price * participants;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const booking = {
      id: crypto.randomUUID(),
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventLocation: event.location,
      participants,
      total,
      status: "Confirmed",
      user: formData,
      createdAt: new Date().toISOString(),
    };

    saveBooking(booking);
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <section className="page-container py-20">
        <div className="card p-8 max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-ink mb-4">
            Booking Confirmed
          </h1>

          <p className="text-gray-600 mb-6">
            Your demo booking for <strong>{event.title}</strong> has been saved
            locally in your browser.
          </p>

          <p className="bg-sakura text-tokyoRed font-semibold rounded-2xl p-4 mb-6">
            Demo only — no real payment was processed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bookings" className="btn-primary">
              View My Bookings
            </Link>
            <Link to="/events" className="btn-secondary">
              Explore More Events
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-container py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="lg:col-span-2 card p-8">
          <h1 className="text-3xl font-bold mb-2">Register for Event</h1>
          <p className="text-gray-600 mb-8">
            Fill in your details to complete the demo booking.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 border rounded-2xl px-4 py-3"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 border rounded-2xl px-4 py-3"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="font-semibold">Phone</label>
              <input
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 border rounded-2xl px-4 py-3"
                placeholder="080-0000-0000"
              />
            </div>

            <div>
              <label className="font-semibold">Nationality</label>
              <input
                required
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full mt-2 border rounded-2xl px-4 py-3"
                placeholder="Nepal, India, USA, etc."
              />
            </div>

            <div>
              <label className="font-semibold">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mt-2 border rounded-2xl px-4 py-3"
              >
                <option>International Student</option>
                <option>Foreign Resident</option>
                <option>Working Professional</option>
                <option>Tourist</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Number of Participants</label>
              <input
                min="1"
                max="5"
                type="number"
                value={participants}
                onChange={(e) => setParticipants(Number(e.target.value))}
                className="w-full mt-2 border rounded-2xl px-4 py-3"
              />
            </div>
          </div>

          <div className="mt-8 bg-softBlue border border-blue-100 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-3">Payment Method</h2>
            <p className="text-gray-600 mb-4">
              Demo only — no real payment will be processed.
            </p>

            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-3"
            >
              <option>Demo Card</option>
              <option>Demo PayPay</option>
              <option>Demo Convenience Store Payment</option>
            </select>
          </div>

          <button type="submit" className="btn-primary w-full mt-8">
            Confirm Demo Booking
          </button>
        </form>

        <aside className="card p-6 h-fit">
          <img
            src={event.image}
            alt={event.title}
            className="rounded-2xl h-48 w-full object-cover mb-5"
          />

          <h2 className="text-2xl font-bold mb-3">{event.title}</h2>

          <p className="text-gray-600 mb-4">
            {event.date} at {event.time}
          </p>

          <div className="border-t pt-4 space-y-3">
            <div className="flex justify-between">
              <span>Price per person</span>
              <strong>¥{event.price.toLocaleString()}</strong>
            </div>

            <div className="flex justify-between">
              <span>Participants</span>
              <strong>{participants}</strong>
            </div>

            <div className="flex justify-between text-xl border-t pt-3">
              <span>Total</span>
              <strong>¥{total.toLocaleString()}</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;
