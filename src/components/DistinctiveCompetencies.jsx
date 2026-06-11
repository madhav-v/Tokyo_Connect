import { Compass, Wallet, Languages } from "lucide-react";

function DistinctiveCompetencies() {
  return (
    <section id="difference" className="section dark-section">
      <div className="section-heading light">
        <p>Distinctive Competencies</p>
        <h2>What makes TABI different?</h2>
        <span>
          TABI is not just a tour service. It is a student-centered travel
          community.
        </span>
      </div>

      <div className="card-grid three">
        <div className="dark-card">
          <Compass size={36} />
          <h3>Community-first travel</h3>
          <p>
            TABI focuses on helping students build friendships, not only visit
            places.
          </p>
        </div>

        <div className="dark-card">
          <Wallet size={36} />
          <h3>Student-friendly pricing</h3>
          <p>
            Trips are designed around student budgets with shared costs and
            group deals.
          </p>
        </div>

        <div className="dark-card">
          <Languages size={36} />
          <h3>Culture and language immersion</h3>
          <p>
            Students learn Japanese customs and language through real travel
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DistinctiveCompetencies;
