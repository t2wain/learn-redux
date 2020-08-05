import React from "react";
import { IItem } from "../../actions/list-types";
import { delItem, toggleItem } from "../../actions/list-actions";

interface IProps {
  items: IItem[];
  delItem: typeof delItem;
  toggleItem: typeof toggleItem;
}

const List: React.SFC<IProps> = ({ items, delItem, toggleItem }) => {
  return items.length ? (
    <ul className="lst-item">
      {items.map(item => (
        <li key={item.id}>
          <span className={item.checked ? "done" : ""}>{item.name}</span>
          <button onClick={() => delItem(item.id)}>x</button>
          <button onClick={() => toggleItem(item.id)}>y</button>
        </li>
      ))}
    </ul>
  ) : (
    <div>No item yet</div>
  );
};

export default List;
