import { useEffect, useState } from "react";

const Header = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

const InnerTable = ({ columns, entries }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column}>{entry[column]}</td>
          ))}
          <button onClick={() => {}}>{"More info"}</button>
        </tr>
      ))}
    </tbody>
  );
};

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const columns = ["id", "age", "sex", "diagnosis", "more info"];

  useEffect(() => {
    const url = "http://localhost:8000/patients";
    fetch(url)
      .then((res) => res.json())
      .then((patients) => {
        setPatients(patients);
      });
  }, []);
  return (
    <div>
      <table>
        <Header columns={columns} />
        <InnerTable columns={columns} entries={patients} />
      </table>
    </div>
  );
};

export default PatientsTable;
