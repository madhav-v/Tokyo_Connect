import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { mockEvents } from "../data/event";
import { getLocalEvents } from "../utils/storage";

function EventDetail() {
  const { id } = useParams();
  const events = getLocalEvents(mockEvents);
  const event = events.find((item) => item.id === id);

  if (!event) {
    return (
      <div className="page-container py-20">
        <h1 className="text-3xl font-bold">Event not found</h1>
        <Link to="/events" className="btn-primary mt-6">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <section className="page-container py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <img
          src={event.image}
          alt={event.title}
          className="rounded-[2rem] w-full h-[480px] object-cover shadow-soft"
        />

        <div>
          <span className="inline-block bg-sakura text-tokyoRed font-semibold px-4 py-2 rounded-full mb-4">
            {event.category}
          </span>

          <h1 className="text-4xl font-bold text-ink mb-4">{event.title}</h1>

          <p className="text-gray-600 text-lg mb-6">{event.description}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="card p-4 flex gap-3 items-center">
              <Calendar className="text-tokyoRed" />
              <span>
                {event.date} at {event.time}
              </span>
            </div>

            <div className="card p-4 flex gap-3 items-center">
              <MapPin className="text-tokyoRed" />
              <span>{event.location}</span>
            </div>

            <div className="card p-4 flex gap-3 items-center">
              <Users className="text-tokyoRed" />
              <span>Capacity: {event.capacity}</span>
            </div>

            <div className="card p-4 flex gap-3 items-center">
              <ShieldCheck className="text-tokyoRed" />
              <span>Verified host demo</span>
            </div>
          </div>

          <div className="card p-6 mb-8">
            <p className="text-gray-600">Price</p>
            <p className="text-4xl font-bold text-ink">
              ¥{event.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Demo only — no real payment will be processed.
            </p>

            <Link
              to={`/checkout/${event.id}`}
              className="btn-primary w-full mt-6"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-16">
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-4">Schedule / Itinerary</h2>
          <ul className="space-y-3">
            {event.itinerary.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700">
                <CheckCircle className="text-tokyoRed shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-4">What is Included</h2>
          <ul className="space-y-3">
            {event.included.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700">
                <CheckCircle className="text-tokyoRed shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-4">Safety Guidelines</h2>
          <ul className="space-y-3">
            {event.safety.map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700">
                <ShieldCheck className="text-tokyoRed shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;
