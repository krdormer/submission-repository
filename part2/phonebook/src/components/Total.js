const Total = ({ parts }) => {
  const exerciseTotal = parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  return <b>total of {exerciseTotal} exercises</b>;
};

export default Total;
