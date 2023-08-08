import StatisticsLine from "./StatisticsLine";

const Stats = ({ good, neutral, bad, total }) => {
  const averageRating = (good - bad) / total;
  const positiveRating = (good / total) * 100;
  const feedbackGiven = (good || neutral || bad) > 0;

  return (
    <>
      <h2>Statistics</h2>
      {feedbackGiven ? (
        <div>
          <StatisticsLine value={`Good: ${good}`} />
          <StatisticsLine value={`Neutral: ${neutral}`} />
          <StatisticsLine value={`Bad: ${bad}`} />
          <StatisticsLine value={`Total: ${total}`} />
          <StatisticsLine value={`Average: ${averageRating}`} />
          <StatisticsLine value={`Positive: ${positiveRating}%`} />
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Stats;
