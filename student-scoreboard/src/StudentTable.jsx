function StudentTable() {
  return (
    <div className="table-box">
      <p className="section-title">Student Records</p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Aman</td>
            <td>78</td>
            <td className="pass">Pass</td>
            <td>
              <input type="number" defaultValue="50" />
              <button>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;