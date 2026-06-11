import { testimonials } from "../data/websiteData";
import { Quote, Star } from "lucide-react";

function Testimonials() {
  const movingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section testimonials-section">
      <div className="section-heading">
        <p>Testimonials</p>
        <h2>Why students love TABI</h2>
        <span>
          TABI helps students feel less alone and more connected while living in
          Japan.
        </span>
      </div>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {movingTestimonials.map((item, index) => (
            <div
              className="testimonial-card moving-card"
              key={`${item.name}-${index}`}
            >
              <Quote size={30} />

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>

              <p>{item.text}</p>

              <h3>{item.name}</h3>
              <span>{item.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
