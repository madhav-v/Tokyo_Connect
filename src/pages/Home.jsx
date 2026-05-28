import { Link } from "react-router-dom";
import { CalendarDays, CreditCard, ShieldCheck, Users } from "lucide-react";
import SafetyBadge from "../components/SafetyBadge";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import { mockEvents } from "../data/event";

function Home() {
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-br from-sakura via-white to-softBlue">
        <div className="page-container py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-tokyoRed font-semibold mb-4">
              Safe meetups and trips for newcomers in Tokyo
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-ink leading-tight mb-6">
              Make friends, explore Japan, and join trusted events.
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Tokyo Connect helps foreign residents and international students
              discover safe social gatherings, cultural activities, and group
              trips with verified hosts and clear safety rules.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events" className="btn-primary">
                Explore Events
              </Link>
              <Link to="/events" className="btn-secondary">
                Join as Member
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80"
              alt="Tokyo city"
              className="rounded-[2rem] shadow-soft w-full h-[480px] object-cover"
            />

            <div className="absolute -bottom-6 -left-4 bg-white rounded-3xl shadow-soft p-5 max-w-xs">
              <p className="font-bold text-ink mb-1">Demo Platform</p>
              <p className="text-gray-600 text-sm">
                Built for a university project presentation using React, Vite,
                Tailwind CSS, mock data, and localStorage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-20">
        <SectionTitle
          label="Why Tokyo Connect?"
          title="Designed for safety, friendship, and easy discovery"
          description="Newcomers often want to explore Tokyo but may feel unsure where to go, who to meet, or whether an event is safe. Tokyo Connect solves that with organized group experiences."
        />

        <div className="grid md:grid-cols-4 gap-6">
          <div className="card p-6">
            <Users className="text-tokyoRed mb-4" />
            <h3 className="font-bold text-lg mb-2">Meet People</h3>
            <p className="text-gray-600">
              Join friendly groups of students, residents, and newcomers.
            </p>
          </div>

          <div className="card p-6">
            <CalendarDays className="text-tokyoRed mb-4" />
            <h3 className="font-bold text-lg mb-2">Explore Events</h3>
            <p className="text-gray-600">
              Find meetups, day trips, food tours, and networking events.
            </p>
          </div>

          <div className="card p-6">
            <CreditCard className="text-tokyoRed mb-4" />
            <h3 className="font-bold text-lg mb-2">Demo Checkout</h3>
            <p className="text-gray-600">
              Register using a simple demo form with no real payment.
            </p>
          </div>

          <div className="card p-6">
            <ShieldCheck className="text-tokyoRed mb-4" />
            <h3 className="font-bold text-lg mb-2">Safety First</h3>
            <p className="text-gray-600">
              Clear itineraries, verified hosts, and group safety rules.
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-10">
        <SectionTitle
          label="Featured Events"
          title="Popular Tokyo experiences"
          description="A small preview of events available in the demo platform."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="page-container py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-white shadow-soft">
          <div className="max-w-3xl mb-10">
            <p className="text-red-300 font-semibold mb-2 uppercase tracking-wide text-sm">
              Trust and Safety
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join events with confidence
            </h2>

            <p className="text-gray-300 text-lg">
              Tokyo Connect focuses on verified organizers, safe meeting points,
              clear itineraries, and emergency support so international students
              and foreign residents can explore Tokyo more comfortably.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
              <h3 className="font-bold text-lg mb-2">Verified Organizers</h3>
              <p className="text-gray-300 text-sm">
                Hosts are reviewed before creating public events.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
              <h3 className="font-bold text-lg mb-2">Emergency Contacts</h3>
              <p className="text-gray-300 text-sm">
                Important contact details are shared before the event.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
              <h3 className="font-bold text-lg mb-2">Safe Meeting Points</h3>
              <p className="text-gray-300 text-sm">
                Events start from public places like stations and cafes.
              </p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
              <h3 className="font-bold text-lg mb-2">Clear Itineraries</h3>
              <p className="text-gray-300 text-sm">
                Users can check the schedule before registering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
