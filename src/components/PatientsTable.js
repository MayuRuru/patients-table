import { useEffect, useState } from "react";
import { Header } from "./Header";
import { InnerTable } from "./InnerTable";

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
