import { useEffect, useState } from "react";
import { mockEvents } from "../data/event";
import { getBookings, getLocalEvents, saveLocalEvents } from "../utils/storage";

function Admin() {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    price: "",
    capacity: "",
    category: "Social Meetup",
  });

  useEffect(() => {
    setEvents(getLocalEvents(mockEvents));
    setBookings(getBookings());
  }, []);

  const totalRevenue = bookings.reduce(
    (sum, booking) => sum + booking.total,
    0
  );

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddEvent(e) {
    e.preventDefault();

    const newEvent = {
      id: form.title.toLowerCase().replaceAll(" ", "-") + "-" + Date.now(),
      title: form.title,
      category: form.category,
      date: form.date,
      time: "6:00 PM",
      location: form.location,
      price: Number(form.price),
      capacity: Number(form.capacity),
      image:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1200&q=80",
      shortDescription:
        "A newly added demo event created from the admin dashboard.",
      description:
        "This event was created locally using the admin demo page. In a production app, this would be saved to a backend database.",
      itinerary: [
        "Meet at location",
        "Host introduction",
        "Group activity",
        "Event ends",
      ],
      included: ["Host support", "Basic event guidance"],
      safety: [
        "Public meeting point",
        "Group rules apply",
        "Emergency contact demo",
      ],
    };

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    saveLocalEvents(updatedEvents);

    setForm({
      title: "",
      date: "",
      location: "",
      price: "",
      capacity: "",
      category: "Social Meetup",
    });
  }

  function handleDeleteEvent(id) {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    saveLocalEvents(updatedEvents);
  }

  function resetEvents() {
    setEvents(mockEvents);
    saveLocalEvents(mockEvents);
  }

  return (
    <section className="page-container py-16">
      <div className="mb-10">
        <p className="text-tokyoRed font-semibold mb-2">Admin demo</p>
        <h1 className="text-4xl font-bold text-ink">Dashboard</h1>
        <p className="text-gray-600 mt-3">
          This is a frontend-only admin demo. Events are stored locally in the
          browser.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="card p-6">
          <p className="text-gray-500">Total Events</p>
          <h2 className="text-4xl font-bold">{events.length}</h2>
        </div>

        <div className="card p-6">
          <p className="text-gray-500">Total Bookings</p>
          <h2 className="text-4xl font-bold">{bookings.length}</h2>
        </div>

        <div className="card p-6">
          <p className="text-gray-500">Revenue Estimate</p>
          <h2 className="text-4xl font-bold">
            ¥{totalRevenue.toLocaleString()}
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <form onSubmit={handleAddEvent} className="card p-6 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-5">Add Demo Event</h2>

          <div className="space-y-4">
            <input
              required
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Event title"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <input
              required
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-3"
            />

            <input
              required
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <input
              required
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price in yen"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <input
              required
              type="number"
              name="capacity"
              value={form.capacity}
              onChange={handleChange}
              placeholder="Capacity"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-2xl px-4 py-3"
            >
              <option>Social Meetup</option>
              <option>Day Trip</option>
              <option>Cultural Activity</option>
              <option>Networking</option>
              <option>Weekend Trip</option>
            </select>

            <button type="submit" className="btn-primary w-full">
              Add Event Locally
            </button>

            <button
              type="button"
              onClick={resetEvents}
              className="btn-secondary w-full"
            >
              Reset Mock Events
            </button>
          </div>
        </form>

        <div className="lg:col-span-2 card p-6">
          <h2 className="text-2xl font-bold mb-5">Manage Events</h2>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="border border-gray-100 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-gray-600">
                    {event.date} · {event.location} · ¥
                    {event.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => handleDeleteEvent(event.id)}
                  className="text-red-600 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
