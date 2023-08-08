import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (e) => {
    const buttonText = e.target.textContent;
    if (buttonText === "Good") {
      setGood(good + 1);
    } else if (buttonText === "Neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={handleFeedback}>Good</button>
        <button onClick={handleFeedback}>Neutral</button>
        <button onClick={handleFeedback}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    </div>
  );
};

export default App;
