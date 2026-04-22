import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <div className="form-box">
      <h2>Register Students</h2>

      <div className="form-row">
        <input
          type="text"
          placeholder="STUDENT NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="SCORE (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button onClick={handleSubmit}>+ ADD</button>
      </div>
    </div>
  );
}

export default AddStudentForm;