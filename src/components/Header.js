import "../assets/styles/patientsTable.css";

export const Header = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column} className="table-cell">
            {column}
          </th>
        ))}
        <th className="table-cell">{"More info"}</th>
      </tr>
    </thead>
  );
};
