import { competencies } from "../data/websiteData";
import {
  Wallet,
  CalendarDays,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Megaphone,
  Handshake,
  Globe2,
} from "lucide-react";

const icons = [
  Wallet,
  CalendarDays,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Megaphone,
  Handshake,
  Globe2,
];

function CoreCompetencies() {
  return (
    <section id="competencies" className="section soft-section">
      <div className="section-heading">
        <p>Core Competencies</p>
        <h2>What TABI must do well</h2>
        <span>
          These are the key abilities TABI needs to deliver safe, enjoyable, and
          meaningful trips.
        </span>
      </div>

      <div className="card-grid four">
        {competencies.map((item, index) => {
          const Icon = icons[index];

          return (
            <div className="mini-card" key={item.title}>
              <Icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CoreCompetencies;
