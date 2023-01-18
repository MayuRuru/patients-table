import SearchIcon from "@rsuite/icons/Search";
import { IconButton } from "rsuite";

export const InnerTable = ({ columns, entries }) => {
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column} className="table-cell">
              {entry[column]}
            </td>
          ))}
          <td className="table-cell">
            <IconButton size="lg" icon={<SearchIcon />} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
