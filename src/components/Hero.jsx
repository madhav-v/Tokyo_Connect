import { MapPin, Star } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-badge">
          <MapPin size={18} />
          Student travel experiences in Japan
        </p>

        <h1>Explore Japan Together</h1>

        <p className="hero-text">
          TABI creates affordable group trips for international students,
          combining travel, culture, friendship, and language practice.
        </p>

        <div className="hero-buttons">
          <a href="#bookings" className="primary-button">
            Explore Live Trips
          </a>
          <a href="#matcher" className="secondary-button">
            Find My Trip
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>1,247+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3>87</h3>
            <p>Trips</p>
          </div>
          <div>
            <h3>42</h3>
            <p>Nationalities</p>
          </div>
          <div>
            <h3>
              4.9 <Star size={18} fill="currentColor" />
            </h3>
            <p>Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
