import React from 'react'
import CourseCard from './components/CourseCard'

function App() {
  return (
   <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Heading */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "30px",
          color: "#2c3e50",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Courses Offered
      </h1>

      {/* Course Cards Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        <CourseCard courseName="React" duration="1 month" trainer="Kumar" fee={8000} mode="Offline" />
        <CourseCard courseName="Power BI" duration="2 months" trainer="Kavin" fee={10000} mode="Online" />
        <CourseCard courseName="SQL" duration="3 months" trainer="Anitha" fee={12000} mode="Online" />
        <CourseCard courseName="Excel" duration="1 month" trainer="Manoj" fee={15000} mode="Offline" />
        <CourseCard courseName="JavaScript" duration="2 months" trainer="Akash" fee={20000} mode="Online" />
      </div>
    </div>

  )
}

export default App; 

