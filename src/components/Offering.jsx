import { offerings } from "../data/websiteData";
import { Train, Home, Sparkles, Users } from "lucide-react";

const icons = [Train, Home, Sparkles, Users];

function Offering() {
  return (
    <section id="offering" className="section">
      <div className="section-heading">
        <p>Offering</p>
        <h2>What TABI provides</h2>
        <span>
          A complete group travel experience with planning, culture, friendship,
          and support.
        </span>
      </div>

      <div className="card-grid four">
        {offerings.map((item, index) => {
          const Icon = icons[index];

          return (
            <div className="feature-card" key={item.title}>
              <Icon size={34} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Offering;
