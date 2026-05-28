import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import SectionTitle from "../components/SectionTitle";
import { mockEvents } from "../data/event";
import { getLocalEvents } from "../utils/storage";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getLocalEvents(mockEvents));
  }, []);

  return (
    <section className="page-container py-16">
      <SectionTitle
        label="Events and Trips"
        title="Find your next Tokyo experience"
        description="Browse social meetups, cultural activities, student networking events, and safe group trips."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default Events;
