import React, { useState } from "react";
import studentsData from "./data/data.json";
import StudentList from "./Component/StudentList";
import StudentCard from "./Component/StudentCard";
import SemesterList from "./Component/SemesterList";
import "./index.css";

function App() {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
  };

  const filteredStudents = studentsData.filter((student) => {
    if (selectedSemester) {
      const formattedSelectedSemester = selectedSemester.replace(/\s/g, '');
      
      return  formattedSelectedSemester === student.cohort.cohortCode ;
    } else {
      return true;
    }
  });

  return (
    <div className="app-container">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <aside>
        <SemesterList
          handleSemesterClick={handleSemesterClick}
          selectedSemester={selectedSemester}
        />
      </aside>
      <div className="student-list">
        <h2>All Students:</h2>
        {filteredStudents.map((student) => (
          <StudentList key={student.id} student={student} />
        ))}
      </div>
       </div>
  );
}

export default App;
