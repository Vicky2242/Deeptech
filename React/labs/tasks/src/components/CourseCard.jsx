import React from 'react'

function CourseCard({courseName, duration, trainer, fee, mode}) {
  return (
    <div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px",
        width: "250px",
        backgroundColor: "#f9f9f9"
    }}>
        <h3>Course Name: {courseName}</h3>
        <p>Duration: {duration}</p>
        <p>Trainer Name: {trainer}</p>
        <p>Fee: {fee}</p>
        <p>Mode: {mode}</p>
      
    </div>
  )
}

export default CourseCard;  
