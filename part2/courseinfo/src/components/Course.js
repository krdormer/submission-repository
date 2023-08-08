// Components
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  console.log("🚀 ~ file: Course.js:7 ~ Course ~ courses:", courses);
  return (
    <>
      {courses.map((course) => (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
