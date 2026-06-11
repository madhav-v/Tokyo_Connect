import { customers, painPoints } from "../data/websiteData";

function Customers() {
  return (
    <section id="customers" className="section soft-section">
      <div className="section-heading">
        <p>Customers</p>
        <h2>Designed for international students</h2>
        <span>
          TABI supports students who want to explore Japan but need affordable,
          social, and easy-to-join travel experiences.
        </span>
      </div>

      <div className="two-column">
        <div className="large-info-card">
          <h3>Primary Customers</h3>
          <ul>
            {customers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="large-info-card red-card">
          <h3>Problems They Face</h3>
          <ul>
            {painPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Customers;
