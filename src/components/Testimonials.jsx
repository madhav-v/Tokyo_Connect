import { testimonials } from "../data/websiteData";
import { Quote } from "lucide-react";

function Testimonials() {
  return (
    <section className="section">
      <div className="section-heading">
        <p>Testimonials</p>
        <h2>Why students love TABI</h2>
        <span>
          TABI helps students feel less alone and more connected while living in
          Japan.
        </span>
      </div>

      <div className="card-grid three">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.name}>
            <Quote size={32} />
            <p>{item.text}</p>
            <h3>{item.name}</h3>
            <span>{item.country}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
