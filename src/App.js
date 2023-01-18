import PatientsTable from "./components/PatientsTable";
import "../src/assets/styles/app.css";

function App() {
  return (
    <div className="table-container">
      <h1>A patients table</h1>
      <PatientsTable />
    </div>
  );
}

export default App;
