import React from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const courseMap = {
    "101": {
      title: "React Course",
      description:
        "Learn React to build interactive user interfaces using components, hooks, and routing.",
      resources: [
        { name: "React Official Docs", url: "https://reactjs.org" },
        { name: "FreeCodeCamp React", url: "https://www.freecodecamp.org/learn/react" },
        { name: "W3Schools React", url: "https://www.w3schools.com/react/" },
      ],
    },
    "102": {
      title: "Python Course",
      description: "Master Python for data science, automation, and backend development.",
      resources: [
        { name: "Python Docs", url: "https://docs.python.org/3/" },
        { name: "Real Python", url: "https://realpython.com/" },
        { name: "W3Schools Python", url: "https://www.w3schools.com/python/" },
      ],
    },
    "103": {
      title: "Full Stack Course",
      description: "Become a full stack developer with frontend, backend, and database skills.",
      resources: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
        { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
        { name: "MongoDB University", url: "https://university.mongodb.com/" },
      ],
    },
  };

  const course = courseMap[id];

  if (!course) return <h2>Course not found</h2>;

  return (
    <div>
      <h2>Course Details</h2>
      <p><strong>Course ID:</strong> {id}</p>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <ul>
        {course.resources.map((res, index) => (
          <li key={index}>
            <a href={res.url} target="_blank" rel="noopener noreferrer">
              {res.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;