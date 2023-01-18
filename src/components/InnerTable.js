import SearchIcon from "@rsuite/icons/Search";
import { IconButton } from "rsuite";

export const InnerTable = ({ entries }) => {
  return (
    <tbody>
      {entries.map(({ id, age, sex, diagnosis }) => (
        <>
          <tr>
            <td>{id}</td>
            <td>{age}</td>
            <td>{sex}</td>
            <td>{diagnosis}</td>
            <td>
              <IconButton size="lg" icon={<SearchIcon />} />
            </td>
          </tr>
        </>
      ))}
    </tbody>
  );
};
