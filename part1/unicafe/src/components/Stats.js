const Stats = ({ good, neutral, bad, total }) => {
  const averageRating = (good - bad) / total;
  const positiveRating = (good / total) * 100;
  const feedbackGiven = (good || neutral || bad) > 0;

  return (
    <>
      <h2>Statistics</h2>
      {feedbackGiven ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {total}</p>
          <p>Average: {averageRating}</p>
          <p>Positive: {positiveRating}%</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Stats;
