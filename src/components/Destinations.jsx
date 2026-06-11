import { destinations } from "../data/websiteData";
import { MapPin } from "lucide-react";

function Destinations() {
  return (
    <section className="section">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
