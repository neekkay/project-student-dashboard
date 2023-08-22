 import React,{useState} from "react";
 import studentsData from "./data/data.json";
 import StudentList from "./Component/StudentList";
 import StudentCard from "./Component/StudentCard";
 import SemesterList from "./component/SemesterList";
 import "./index.css";
function App() {
  const [selectedSemester, setSelectedSemester] = useState(null);

const [SelectedCohortCode, setSelectedCohortCode] = useState(null);

  const handleSemesterClick = (semester, cohortCode) =>{
    setSelectedSemester(semester);
    setSelectedCohortCode(cohortCode);
  
  // console.log(studentsData);
  
  };

const filteredStudents = studentsData.filter((student) => student.cohort.cohortCode === selectedSemester && student.cohort.cohort.cohortCode === setSelectedCohortCode
);

  return (
    <div className="app-container">
      <header>
    <h1>Student Dashboard</h1>
      </header>
      <aside className="semester-list">
        <h2>Choose a Class by Start Date</h2>
        <ul>
          <li className="clickable" onClick={() => handleSemesterClick('Winter 2026')}>Winter 2026 </li>
          <li className="clickable" onClick={() => handleSemesterClick('Fall2026')}>Fall 2026 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Summer2026')}>Summer 2026 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Spring2026')}>Spring 2026 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Winter2025')}>Winter 2025 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Fall2025')}>Fall 2025 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Summer2025')}>Summer 2025 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Spring2025')}>Spring 2025 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Winter2024')}>Winter 2024 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Fall2024')}>Fall 2024 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Summer2024')}>Summer 2024 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Spring2024')}>Spring 2024 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Winter2023')}>Winter 2023 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Fall2023')}>Fall 2023 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Summer2023')}>Summer 2023 </li>
         <li className="clickable" onClick={() => handleSemesterClick('Spring2023')}>Spring 2023 </li>
        </ul>
      </aside>
      <div className="student-list">
      <h2>All Students:</h2>
      {studentsData.map((student) => {
        return <StudentList  key={student.id} student={student} />;
      })}
      <div className="student-card">
      <h2>Students Card</h2>
      {studentsData.map((student) => {
        return <StudentCard key={student.id} student={student} className="StudentCard" />;
        
      })}
      console.log(StudentCard);
      </div>
    </div>
    </div>
  
  
  );
    }
export default App;
