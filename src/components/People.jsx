import { people } from "../data/websiteData";

function People() {
  return (
    <section id="people" className="section">
      <div className="section-heading">
        <p>People</p>
        <h2>The people behind TABI</h2>
        <span>
          TABI is powered by students, organizers, cultural supporters, and
          local partners.
        </span>
      </div>

      <div className="card-grid three">
        {people.map((item) => (
          <div className="people-card" key={item.role}>
            <div className="avatar">{item.role.charAt(0)}</div>
            <h3>{item.role}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default People;
