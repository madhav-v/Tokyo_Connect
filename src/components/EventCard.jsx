import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Tag } from "lucide-react";

function EventCard({ event }) {
  return (
    <div className="card overflow-hidden hover:-translate-y-1 transition">
      <img
        src={event.image}
        alt={event.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="inline-flex items-center gap-1 text-sm bg-sakura text-tokyoRed font-semibold px-3 py-1 rounded-full mb-4">
          <Tag size={14} />
          {event.category}
        </span>

        <h3 className="text-xl font-bold text-ink mb-2">{event.title}</h3>

        <p className="text-gray-600 mb-5">{event.shortDescription}</p>

        <div className="space-y-2 text-sm text-gray-600 mb-6">
          <p className="flex items-center gap-2">
            <Calendar size={16} /> {event.date} at {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> {event.location}
          </p>
          <p className="flex items-center gap-2">
            <Users size={16} /> Capacity: {event.capacity}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">¥{event.price.toLocaleString()}</p>
          <Link to={`/events/${event.id}`} className="btn-primary py-2 px-4">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
