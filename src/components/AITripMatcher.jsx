import { useState } from "react";
import { Sparkles } from "lucide-react";

function AITripMatcher() {
  const [showResult, setShowResult] = useState(false);

  return (
    <section id="matcher" className="section matcher-section">
      <div className="matcher-box">
        <div>
          <p className="eyebrow">AI Trip Matcher</p>
          <h2>Find the best trip for you</h2>
          <p>
            For the demo, students can choose their university, budget, and
            interests. TABI recommends a suitable trip.
          </p>
        </div>

        <div className="matcher-form">
          <label>
            University
            <select>
              <option>Tokyo International University</option>
              <option>Takasaki University</option>
              <option>Tokyo University</option>
              <option>Waseda University</option>
              <option>Kyoto University</option>
            </select>
          </label>

          <label>
            Budget
            <select>
              <option>¥10,000 - ¥20,000</option>
              <option>¥20,000 - ¥30,000</option>
              <option>Below ¥10,000</option>
            </select>
          </label>

          <label>
            Interest
            <select>
              <option>Culture + Friendship</option>
              <option>Food + Language Practice</option>
              <option>Nature + Adventure</option>
            </select>
          </label>

          <button onClick={() => setShowResult(true)}>Find My Trip</button>

          {showResult && (
            <div className="match-result">
              <Sparkles size={26} />
              <div>
                <h3>Kyoto Cultural Weekend</h3>
                <p>92% Match</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AITripMatcher;
