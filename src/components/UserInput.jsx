export default function UserInput({ userInput, onHandleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onHandleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onHandleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onHandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onHandleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
