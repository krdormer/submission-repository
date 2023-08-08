const Total = ({ parts }) => {
  const exerciseTotal = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  return <p>Number of exercises {exerciseTotal}</p>;
};

export default Total;
