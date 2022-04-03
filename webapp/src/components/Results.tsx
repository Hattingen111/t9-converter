import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { useInputContext } from "../context/useInputContext";
import "../public/App.css";

export const Results = () => {
  const { suggestions } = useInputContext();

  const { predictions, combos } = suggestions;

  return predictions.length || combos.length ? (
    <Menu className={"results-list"} large={true}>
      {predictions.map((item) => (
        <MenuItem key={"prediction" + item} text={item} />
      ))}
      <MenuDivider />
      {combos.map((item, index) => (
        <MenuItem key={"combo" + index} text={item} />
      ))}
    </Menu>
  ) : (
    <b>'No Results'</b>
  );
};
