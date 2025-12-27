import React from 'react'
import {Link} from 'react-router-dom';

function Courses() {
  return (
    <div>
      <h2>Available Courses:</h2>
      <ul>
        <li>
            <Link to="/courses/101">React Course</Link>
        </li>
        <li>
            <Link to="/courses/102">python Course</Link>
        </li>
        <li>
            <Link to="/courses/103">FULL STACK Course</Link>
        </li>
      </ul>
    </div>
  )
}

export default Courses;
