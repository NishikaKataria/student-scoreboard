import { useState } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", score: 78 },
    { name: "Rohit", score: 35 },
    { name: "Priya", score: 88 },
    { name: "Sneha", score: 42 },
    { name: "Vikas", score: 95 },
  ]);

  const addStudent = (name, score) => {
    if (name === "" || score === "") return;

    const newStudent = {
      name: name,
      score: Number(score),
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} />
    </div>
  );
}

export default App;