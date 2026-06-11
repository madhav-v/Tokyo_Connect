import { Wallet, Users, Landmark, CalendarCheck } from "lucide-react";

function ValueProposition() {
  return (
    <section id="value" className="section value-section">
      <div className="value-box">
        <div>
          {/* <p className="eyebrow">Value Proposition</p> */}
          <h2>Affordable trips. Real friendships. Meaningful culture.</h2>
        </div>

        <div>
          <p>
            TABI makes travel easier for international students by organizing
            budget-friendly trips where they can explore Japan, meet new people,
            practice language, and experience culture in a comfortable group.
          </p>

          <div className="value-icons">
            <span>
              <Wallet size={18} /> Affordable
            </span>
            <span>
              <Users size={18} /> Social
            </span>
            <span>
              <Landmark size={18} /> Cultural
            </span>
            <span>
              <CalendarCheck size={18} /> Convenient
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
