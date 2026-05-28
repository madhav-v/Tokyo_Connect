import { AlertTriangle, MapPinned, ShieldCheck, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

function AboutSafety() {
  return (
    <section className="page-container py-16">
      <SectionTitle
        label="About and Safety"
        title="A safer way for newcomers to join social activities in Tokyo"
        description="Tokyo Connect is designed for foreign residents, international students, and newcomers who want to explore Japan, meet people, and join organized experiences with confidence."
      />

      <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80"
          alt="Tokyo street"
          className="rounded-[2rem] shadow-soft h-[440px] w-full object-cover"
        />

        <div className="space-y-6">
          <div className="card p-6">
            <ShieldCheck className="text-tokyoRed mb-3" />
            <h3 className="text-xl font-bold mb-2">Verified Organizers</h3>
            <p className="text-gray-600">
              In a real version, hosts would be verified before they can create
              public events. This helps reduce unsafe or low-quality gatherings.
            </p>
          </div>

          <div className="card p-6">
            <MapPinned className="text-tokyoRed mb-3" />
            <h3 className="text-xl font-bold mb-2">Safe Meeting Points</h3>
            <p className="text-gray-600">
              Events use public and easy-to-find locations such as major train
              stations, cafes, and popular landmarks.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <Users className="text-tokyoRed mb-4" />
          <h3 className="text-xl font-bold mb-2">Group Rules</h3>
          <p className="text-gray-600">
            Participants must respect others, avoid harassment, stay with the
            group during trips, and follow host instructions.
          </p>
        </div>

        <div className="card p-6">
          <AlertTriangle className="text-tokyoRed mb-4" />
          <h3 className="text-xl font-bold mb-2">Emergency Contacts</h3>
          <p className="text-gray-600">
            Each event can include emergency contact information, meeting point
            details, and backup instructions.
          </p>
        </div>

        <div className="card p-6">
          <ShieldCheck className="text-tokyoRed mb-4" />
          <h3 className="text-xl font-bold mb-2">Clear Itineraries</h3>
          <p className="text-gray-600">
            Participants can review the schedule, price, meeting location, and
            included services before registering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSafety;
