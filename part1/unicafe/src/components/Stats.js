const Stats = ({ good, neutral, bad, total }) => {
  const averageRating = (good - bad) / total;
  const positiveRating = (good / total) * 100;

  return (
    <>
      <h2>Statistics</h2>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {total}</p>
        <p>Average: {averageRating}</p>
        <p>Positive: {positiveRating}%</p>
      </div>
    </>
  );
};

export default Stats;
