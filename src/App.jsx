 import React,{useState} from "react";
 import studentsData from "./data/data.json";
 import StudentList from "./Component/StudentList";
 import StudentCard from "./Component/StudentCard"
 import "./index.css";
function App() {
  const [selectedSemester, setSelectedSemester]= useState(null);

  const handleSemesterClick = (semester) =>{
    setSelectedSemester(semester);
  };
  // console.log(studentsData);
  
  return (
    <div className="app-container">
      <header>
    <h1>Student Dashboard</h1>
      </header>
      <aside className="semester-list">
        <h2>Choose a Class by Start Date</h2>
        <ul>
          <li onClick={() => handleSemesterClick('Winter 2026')}>Winter 2026 </li>
          <li onClick={() => handleSemesterClick('Fall 2026')}>Fall 2026 </li>
         <li onClick={() => handleSemesterClick('Summer 2026')}>Summer 2026 </li>
         <li onClick={() => handleSemesterClick('Spring 2026')}>Spring 2026 </li>
         <li onClick={() => handleSemesterClick('Winter 2025')}>Winter 2025 </li>
         <li onClick={() => handleSemesterClick('Fall 2025')}>Fall 2025 </li>
         <li onClick={() => handleSemesterClick('Summer 2025')}>Summer 2025 </li>
         <li onClick={() => handleSemesterClick('Spring 2025')}>Spring 2025 </li>
         <li onClick={() => handleSemesterClick('Winter 2024')}>Winter 2024 </li>
         <li onClick={() => handleSemesterClick('Fall 2024')}>Fall 2024 </li>
         <li onClick={() => handleSemesterClick('Summer 2024')}>Summer 2024 </li>
         <li onClick={() => handleSemesterClick('Spring 2024')}>Spring 2024 </li>
         <li onClick={() => handleSemesterClick('Winter 2023')}>Winter 2023 </li>
         <li onClick={() => handleSemesterClick('Fall 2023')}>Fall 2023 </li>
         <li onClick={() => handleSemesterClick('Summer 2023')}>Summer 2023 </li>
         <li onClick={() => handleSemesterClick('Spring 2023')}>Spring 2023 </li>
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
        return <StudentCard key={student.id} student={student} />;
        
      })}
      console.log(StudentCard);
      </div>
    </div>
    </div>
  
  
  );
    }
export default App;
