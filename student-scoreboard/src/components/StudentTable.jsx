function StudentTable({ students }) {
  return (
    <div className="table-box">
      <h2>Student Records</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.score}</td>
              <td
                className={
                  student.score >= 40 ? "pass-text" : "fail-text"
                }
              >
                {student.score >= 40 ? "Pass" : "Fail"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;