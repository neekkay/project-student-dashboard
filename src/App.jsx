import studentsData from "./data/data.json";
import StudentList from "./Component/StudentList";

function App() {
  console.log(studentsData);
  return (
    <div>
      <h1>Student Dashboard</h1>
      {studentsData.map((student) => {
        return <StudentList  key={student.id} student={student} />;
      })}
    </div>
  );
}

export default App;
