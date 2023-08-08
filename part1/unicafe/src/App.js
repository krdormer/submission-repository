import { useState } from "react";
import Stats from "./components/Stats";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleFeedback = (e) => {
    const buttonText = e.target.textContent;
    if (buttonText === "Good") {
      setGood(good + 1);
    } else if (buttonText === "Neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={handleFeedback}>Good</button>
        <button onClick={handleFeedback}>Neutral</button>
        <button onClick={handleFeedback}>Bad</button>
      </div>
      <Stats good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
