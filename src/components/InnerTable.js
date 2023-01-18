export const InnerTable = ({ columns, entries }) => {
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
