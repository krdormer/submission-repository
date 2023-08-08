import StatisticsLine from "./StatisticsLine";

const Stats = ({ good, neutral, bad, total }) => {
  const averageRating = (good - bad) / total;
  const positiveRating = (good / total) * 100;
  const feedbackGiven = (good || neutral || bad) > 0;

  return (
    <>
      <h2>Statistics</h2>
      {feedbackGiven ? (
        <table>
          <tbody>
            <StatisticsLine text={"Good: "} value={good} />
            <StatisticsLine text={"Neutral: "} value={neutral} />
            <StatisticsLine text={"Bad: "} value={bad} />
            <StatisticsLine text={"Total: "} value={total} />
            <StatisticsLine text={"Average: "} value={averageRating} />
            <StatisticsLine text={"Positive: "} value={positiveRating} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Stats;
