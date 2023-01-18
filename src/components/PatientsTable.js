import { useEffect, useState } from "react";
import { Header } from "./Header";
import { InnerTable } from "./InnerTable";
import "../assets/styles/patientsTable.css";

const PatientsTable = () => {
  const [patients, setPatients] = useState([]);
  const columns = ["id", "age", "sex", "diagnosis"];

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
      <table className="table">
        <Header columns={columns} />
        <InnerTable columns={columns} entries={patients} />
      </table>
    </div>
  );
};

export default PatientsTable;
